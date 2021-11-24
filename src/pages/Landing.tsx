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
    Spacer,
    Switch,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

// Assets
import signInImage from '../assets/img/decentrabox.png';
import AuthLayout from '../layouts/AuthLayout';
import pdf from '../assets/img/pdforange.png';
import video from '../assets/img/videoorange.png';
import newvideo from '../assets/img/newvideoorange.png';
import ipfs from '../assets/img/distributed.png';
import files from '../assets/img/fileorange.png';
import bgheader from '../assets/img/landingheader.png';
// import files from '../assets/img/fileorange.png';





function Landing() {
    // Chakra color mode


    const titleColor = useColorModeValue('#FF6100', 'teal.200');
    const textColor = useColorModeValue('gray.400', 'white');
    return (
        <AuthLayout>
            {/* First */}
            <Flex position="relative">
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    justifyContent="space-between"
                    // mb="30px"
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
                                Take Your Docs Anywhere and Everywhere
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Simply save your documents witth us and viola! Access them from anywhere, anytime!
                            </Text>
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
                            bgImage={pdf}
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


            {/* Second */}
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
                        justifyContent="end"
                        style={{ userSelect: 'none' }}
                        ml="60%"
                        w={{ base: '100%', md: '50%', lg: '42%' }}
                    >
                        <Flex
                            direction="column"
                            w="100%"
                            background="transparent"
                            p="48px"
                            right="0px"
                            mt={{ md: '150px', lg: '80px' }}
                        >
                            <Heading color={titleColor} fontSize="32px" mb="10px">
                                Save Videos Quickly
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Save all those large videos quickly and easily! Next time you want to show your family your entire wedding video, just log in and Enjoy!
                            </Text>

                        </Flex>
                    </Flex>
                    <Box
                        display={{ base: 'none', md: 'block' }}
                        overflowX="hidden"
                        h="100%"
                        w="40vw"
                        position="absolute"
                        left="0px"
                    >
                        <Box
                            bgImage={newvideo}
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


            {/* Third */}
            <Flex position="relative">
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    justifyContent="space-between"
                    // mb="30px"
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
                                Never Lose A File Again
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Left your phone on the train? You photos, videos and docs are just fine! Just sign in to
                                DecentraBox from any device and all your uploaded content will be waiting for you.
                            </Text>


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
                            bgImage={files}
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

            {/* Fourth */}
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
                        justifyContent="end"
                        style={{ userSelect: 'none' }}
                        ml="60%"
                        w={{ base: '100%', md: '50%', lg: '42%' }}
                    >
                        <Flex
                            direction="column"
                            w="100%"
                            background="transparent"
                            p="48px"
                            right="0px"
                            mt={{ md: '150px', lg: '80px' }}
                        >
                            <Heading color={titleColor} fontSize="32px" mb="10px">
                                Access A Blockchain Baseed Distributed Storage
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Access IPFS seamlessly without the hassle of managing the infrastructure. Store your data reliably using
                                blockchain without any need to install, configure or maintaining any expensive infrastructure!
                            </Text>

                        </Flex>
                    </Flex>
                    <Box
                        display={{ base: 'none', md: 'block' }}
                        overflowX="hidden"
                        h="100%"
                        w="40vw"
                        position="absolute"
                        left="0px"
                    >
                        <Box
                            bgImage={ipfs}
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

            {/* Fifth */}
            <Flex position="relative">
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    justifyContent="space-between"
                    // mb="30px"
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
                                Join Us Today
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                We provide secure, reliable and scalable access to the IPFS for you to back up your files!
                            </Text>
                            <Button color="white" bgColor={titleColor}>
                                Get Started
                            </Button>


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
}

export default Landing;
