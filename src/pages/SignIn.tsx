// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { ChangeEvent, useState } from 'react';

// Assets
import signInImage from '../assets/img/decentrabox.png';
import AuthLayout from '../layouts/AuthLayout';

export const SignIn: React.FC = () => {
    // Chakra color mode
    const titleColor = useColorModeValue('#FF6100', 'teal.200');
    const textColor = useColorModeValue('gray.400', 'white');
    const [email, setEmail] = useState<string>('');
    const [processing, setprocessing] = useState<boolean>(false);
    const toast = useToast();
    const toastIdRef = React.useRef<string | number | undefined>();

    const login = async () => {
        setprocessing(true);
        if (email) {
            try {
                const currentPath =
                    window.location.protocol + '//' + window.location.hostname + ':' + window.location.port;
                const processLogin = await axios.get(
                    'https://soyrm3nmp9.execute-api.ap-southeast-2.amazonaws.com/Prod/send-magiclink?to=' +
                        email +
                        '&host=' +
                        currentPath,
                );
                if (processLogin.status == 200) {
                    toastIdRef.current = toast({
                        title: 'Success',
                        description: 'Check your email for your unique signin link',
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    });
                }
            } catch (error) {
                console.log(error);
                toastIdRef.current = toast({
                    title: 'Error',
                    description: 'An Error Occurred while processing your signin, please try later.',
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                });
            }
        }
        setprocessing(false);
    };

    return (
        <AuthLayout>
            <Flex position="relative" mb="40px">
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    justifyContent="space-between"
                    mb="30px"
                    pt={{ sm: '100px', md: '0px' }}
                >
                    <Flex
                        alignItems="center"
                        justifyContent="start"
                        style={{ userSelect: 'none' }}
                        w={{ base: '100%', md: '50%', lg: '42%' }}
                    >
                        <Flex
                            direction="column"
                            w="100%"
                            background="transparent"
                            p="48px"
                            mt={{ md: '150px', lg: '80px' }}
                        >
                            <Heading color={titleColor} fontSize="32px" mb="10px">
                                Welcome Back
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Enter your email to sign in
                            </Text>
                            <FormControl>
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Email
                                </FormLabel>
                                <Input
                                    borderRadius="15px"
                                    mb="24px"
                                    fontSize="sm"
                                    type="text"
                                    placeholder="Your email adress"
                                    size="lg"
                                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                />
                                <Button
                                    fontSize="10px"
                                    type="submit"
                                    bg="#FF6100"
                                    w="100%"
                                    h="45"
                                    mb="20px"
                                    color="white"
                                    mt="20px"
                                    _hover={{
                                        bg: 'orange.200',
                                    }}
                                    _active={{
                                        bg: 'orange.400',
                                    }}
                                    onClick={login}
                                >
                                    SIGN IN
                                </Button>
                            </FormControl>
                            <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                maxW="100%"
                                mt="0px"
                            >
                                <Text color={textColor} fontWeight="medium">
                                    Don't have an account?
                                    <Link href="/signup" >
                                    <Button ml="10px" borderColor="#FF6100" textColor="#FF6100" bgColor="white" >
                                    Sign Up
                                </Button>
                                    </Link>
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Box
                        display={{ base: 'none', md: 'block' }}
                        overflowX="hidden"
                        h="100%"
                        w="40vw"
                        position="absolute"
                        right="0px"
                    >
                        <Box
                            bgImage={signInImage}
                            w="100%"
                            h="100%"
                            bgSize="cover"
                            bgPosition="50%"
                            position="absolute"
                            borderBottomLeftRadius="20px"
                        ></Box>
                    </Box>
                </Flex>
            </Flex>
        </AuthLayout>
    );
};

export default SignIn;
