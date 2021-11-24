import 'react-table/react-table.css';

import { QuestionIcon } from '@chakra-ui/icons';
// Chakra imports
import {
    Box,
    Button,
    Center,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Image,
    Input,
    Link,
    SimpleGrid,
    Stack,
    Switch,
    Text,
    Tooltip,
    useColorModeValue,
    useToast,
    VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { base64StringToBlob } from 'blob-util';
import CryptoJS from 'crypto-js';
import FormData from 'form-data';
import fs from 'fs';
import * as IPFS from 'ipfs';
import OrbitDB from 'orbit-db';
import KeyValueStore from 'orbit-db-kvstore';
import path from 'path';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Redirect } from 'react-router';
import ReactTable from 'react-table';

import { ReactComponent as MediaIcon } from '../assets/icons/media.svg';
import SettingsModal from '../components/SettingsModal';
import useLocalStorage from '../hooks/useLocalStorage';
import { UserResponseDTO } from '../interfaces/UserResponseDTO';
import GeneralLayout from '../layouts/GeneralLayout';

interface FileStorage {
    cid: string;
    name: string;
    description?: string;
    size?: string;
}

export const Dashboard: React.FC = () => {
    const [currentUser, setCurrentUser] = useLocalStorage<UserResponseDTO | undefined>('DBOX_USER', undefined);
    const toast = useToast();
    const toastIdRef = React.useRef<string | number | undefined>();

    //file upload
    const [isSubmitting, setIsSubmitting] = useState<boolean>();
    const [image, setImage] = useState<File>(); //formData: nft Image File
    const [fileDesc, setfileDesc] = useState<string>('');
    const [fileName, setfileName] = useState<string>('');
    const [fileSize, setfileSize] = useState<string>('');
    const [fileEncryption, setfileEncryption] = useState<boolean>(true);
    const [userFiles, setUserFiles] = useState<FileStorage[]>([]);

    //orbitDB & IPFS
    const [dbHandler, setdbHandler] = useState<any>();
    const [orbitdb, setorbitdb] = useState<OrbitDB>();
    const [ipfs, setipfs] = useState();
    const ipfsOptions = {
        repo: './dboxipfs/v2',
        start: true,
        preload: {
            enabled: false,
        },
        EXPERIMENTAL: {
            pubsub: true,
        },
        config: {
            Addresses: {
                Swarm: [
                    // Use own signal server
                    '/dns4/secure-castle-81998.herokuapp.com/tcp/443/wss/p2p-webrtc-star/',
                ],
            },
        },
    };

    const options = {
        // Give write access to everyone
        accessController: {
            write: ['*'],
        },
    };

    //render table
    const columns = [
        {
            Header: 'CID',
            accessor: 'cid',
        },
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Description',
            accessor: 'description',
        },
        {
            Header: 'File Size',
            accessor: 'size',
        },
        {
            Header: 'View File',
            id: 'view',
            accessor: (row: FileStorage) => (
                <>
                    <Center>
                        <HStack>
                            <Link href={'https://dweb.link/ipfs/' + row.cid} target="_blank">
                                <Button>View File</Button>
                            </Link>
                            <SettingsModal></SettingsModal>
                        </HStack>
                    </Center>
                </>
            ),
        },
    ];

    useEffect(() => {
        if (currentUser) {
            fetchData();
            //and renew api key if expired
            if (currentUser?.expiry) {
                if (Date.parse(currentUser?.expiry) <= Date.now()) {
                    resetApiKey();
                }
            }
        } else {
            window.alert('Please login using your email!');
        }
    }, []);

    const resetApiKey = async () => {
        const userEmail = currentUser?.email;
        //fetch browser key
        const key = await axios.get('https://soyrm3nmp9.execute-api.ap-southeast-2.amazonaws.com/Prod/getapi/');
        //add to local storage
        const tmpUser: UserResponseDTO = {
            email: userEmail!,
            token: key.data.token,
            expiry: key.data.expiry,
        };
        setCurrentUser(tmpUser);
    };

    const fetchData = async () => {
        if (!dbHandler) {
            let tmpIPFS = ipfs;
            if (!ipfs) {
                tmpIPFS = await IPFS.create(ipfsOptions);
                setipfs(tmpIPFS);
            }

            const orbdb = await OrbitDB.createInstance(tmpIPFS);
            setorbitdb(orbdb);
            const tmpDB = await orbdb.keyvalue('dcb.files', options);
            console.log(tmpDB.address.toString());
            await tmpDB.load();
            setdbHandler(tmpDB);
            console.log('DB Loaded');
            if (currentUser) {
                let tmpFiles;
                try {
                    tmpFiles = tmpDB.get(currentUser?.email);
                } catch (error) {
                    console.log(error);
                }
                setUserFiles(tmpFiles);
            }
        }
    };

    function formatBytes(bytes, decimals = 2) {
        if (bytes === 0) return '0 Bytes';

        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

        const i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    /* Handler for operations on file select */
    const onDrop = useCallback((acceptedFiles) => {
        if (isSubmitting) return;
        // Do something with the files
        acceptedFiles.forEach((file: File) => {
            setImage(file);
            setfileName(file.name);
            setfileSize(formatBytes(file.size));
            const reader = new FileReader();
            // reader.readAsDataURL(file);
            reader.onload = () => {
                // Do whatever you want with the file contents
                if (fileEncryption) {
                    console.log(file);
                    const fileExt = path.extname(file.name);
                    console.log(fileExt);
                    let ciphertext: string | null = null;
                    //if image
                    if (fileExt == '.txt') {
                        const fileContents = fs.readFileSync(file.name);
                        ciphertext = Buffer.from(fileContents).toString('base64');
                        // ciphertext = CryptoJS.AES.encrypt(file.arrayBuffer(), 'DecenTraBox21').toString();

                        //}  else if (fileExt == '.jpg' || fileExt == '.png' || fileExt == '.jpeg') {
                        //     const base64 = reader.result;
                        //     console.log(base64);
                        //     ciphertext = CryptoJS.AES.encrypt(base64 as string, 'DecenTraBox21').toString();
                    } else {
                        toastIdRef.current = toast({
                            title: 'Warning',
                            description: 'We current only support encryption for text files.',
                            status: 'warning',
                            duration: 9000,
                            isClosable: true,
                        });
                    }
                    // const buffer = fs.readFileSync(file.name);
                    // console.log(ciphertext);
                    // if (ciphertext) {
                    //     fs.writeFileSync(file.name + '.txt', ciphertext);
                    //     const tmp = new File
                    //     // const blob = base64StringToBlob(ciphertext, file.type);
                    //     // const tmpFile = new File(blob, file.name);
                    //     setImage(tmpFile);
                    // }
                }
            };
            reader.readAsDataURL(file);
        });
    }, []);

    const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const files = acceptedFiles.map((file) => (
        <li key={file.name}>
            {file.name} - {file.size} bytes
        </li>
    ));

    const uploadFile = async () => {
        setIsSubmitting(true);

        //key check
        if (currentUser?.expiry) {
            console.log(Date.parse(currentUser?.expiry));
        }

        if (image && dbHandler) {
            try {
                const multipartForm = new FormData();
                multipartForm.append('data', image);

                const headers = {
                    Authorization: 'Bearer ESTfe074f29-6fec-420f-8797-5b4833f93b9eARY',
                };
                const saveFile = await axios.post('https://shuttle-4.estuary.tech/content/add', multipartForm, {
                    headers: headers,
                });
                if (saveFile.status == 200) {
                    const cid = saveFile.data.cid;
                    let tmpFiles: FileStorage[] = [];
                    //fetch old files
                    try {
                        const tmp2Files: FileStorage[] = dbHandler.get(currentUser?.email);
                        if (tmp2Files.length != 0) tmpFiles = tmp2Files;
                    } catch (error) {
                        console.log(error);
                    }

                    const tmpEntry: FileStorage = {
                        cid: cid,
                        name: fileName,
                        description: fileDesc,
                        size: fileSize,
                    };
                    //save entry
                    tmpFiles.push(tmpEntry);
                    dbHandler.put(currentUser?.email, tmpFiles);
                    setUserFiles(tmpFiles);
                }

                toastIdRef.current = toast({
                    title: 'Success',
                    description: 'Your file has been updated successfully',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                });
            } catch (error) {
                console.log(error);
                toastIdRef.current = toast({
                    title: 'Error',
                    description: 'An Error Occurred while uploading your file',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            }
        }
        setIsSubmitting(false);
    };

    return (
        <GeneralLayout>
            {!currentUser ? <Redirect to="/"></Redirect> : undefined}
            <SimpleGrid column={1} mx={20}>
                <Stack
                    spacing={3}
                    pb="24px"
                    boxShadow={'0 15px 25px -7px #FF6100, 0 -12px 10px -10px #FF6100!important;'}
                    margin="50px"
                >
                    <Text color={useColorModeValue('gray.600', 'white')} fontSize="24px" align="start" w="100%">
                        <Center>Upload Files</Center>
                    </Text>
                    <HStack spacing={20} p={10}>
                        <Box
                            px={'8px'}
                            cursor={isSubmitting ? 'default' : 'pointer'}
                            {...getRootProps()}
                            border="4px dashed"
                            borderColor={useColorModeValue('gray.600', 'gray.600')}
                            w="700px"
                            h="200px"
                        >
                            <input disabled={isSubmitting} {...getInputProps()} />
                            {image ? (
                                <Text>{files}</Text>
                            ) : (
                                <Flex h="100%" pt="2%" px="16px" flexDirection="column">
                                    <Center w="100%">
                                        <MediaIcon style={{ width: '50px', height: '50px' }} />
                                    </Center>
                                    <Center w="100%" pt="16px">
                                        {isDragActive ? (
                                            <Text>Drop the files here ...</Text>
                                        ) : (
                                            <Box>
                                                <Text fontSize="20px">Drag &amp; drop some files here</Text>
                                                <Text fontSize="16px">or click to browse media on your device</Text>
                                            </Box>
                                        )}
                                    </Center>
                                </Flex>
                            )}
                        </Box>
                        {image ? (
                            <VStack
                                p={'8px'}
                                spacing={2}
                                border="1px solid"
                                borderColor={useColorModeValue('gray.600', 'gray.600')}
                                w="500px"
                            >
                                <Text as="h1" textColor="gray.600" fontSize="26px" align="center" w="100%">
                                    File Information
                                </Text>
                                <FormControl id="description" isRequired>
                                    <FormLabel>Description</FormLabel>
                                    <Input
                                        type="text"
                                        name="fileDesc"
                                        id="fileDesc"
                                        placeholder="Add File Description"
                                        value={fileDesc}
                                        w="460px"
                                        onChange={(e: ChangeEvent<HTMLInputElement>) => setfileDesc(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl id="virtual" paddingTop={'10px'}>
                                    <Checkbox
                                        colorScheme="teal"
                                        isChecked={fileEncryption}
                                        onChange={(e) => setfileEncryption(e.target.checked)}
                                    >
                                        File Encryption &nbsp;
                                        <Tooltip
                                            label="Files on IPFS are public and can be seen by anyone, encrypt your file to keep it safe    "
                                            fontSize="md"
                                        >
                                            <QuestionIcon />
                                        </Tooltip>
                                    </Checkbox>
                                </FormControl>
                                <Button
                                    isLoading={isSubmitting}
                                    variant="outline"
                                    colorScheme="orange"
                                    onClick={uploadFile}
                                >
                                    Add File
                                </Button>
                            </VStack>
                        ) : undefined}
                    </HStack>
                </Stack>
                <Box>
                    <Text color={useColorModeValue('gray.600', 'white')} fontSize="24px" align="start" w="100%">
                        <Center>Your Files</Center>
                    </Text>

                    <ReactTable
                        data={userFiles}
                        columns={columns}
                        filterable
                        // loading={loading}
                        defaultPageSize={8}
                        className="-striped -highlight"
                    />
                </Box>
            </SimpleGrid>
        </GeneralLayout>
    );
};

export default Dashboard;
