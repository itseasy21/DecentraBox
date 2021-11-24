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
} from '@chakra-ui/react';
import React from 'react';

// Assets
import signInImage from '../assets/img/decentrabox.png';
import AuthLayout from '../layouts/AuthLayout';





function Land() {
    // Chakra color mode


    const titleColor = useColorModeValue('#FF6100', 'teal.200');
    const textColor = useColorModeValue('gray.400', 'white');
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
                                Enter your email and password to sign in
                            </Text>

                            <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                maxW="100%"
                                mt="0px"
                            >
                                <Text color={textColor} fontWeight="medium">
                                    Don't have an account?
                                    <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                                        Sign Up
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
                                Welcome Back
                            </Heading>
                            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
                                Enter your email and password to sign in
                            </Text>

                            <Flex
                                flexDirection="column"
                                justifyContent="center"
                                alignItems="center"
                                maxW="100%"
                                mt="0px"
                            >
                                <Text color={textColor} fontWeight="medium">
                                    Don't have an account?
                                    <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                                        Sign Up
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
                        left="0px"
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

            {/* </Flex> */}
        </AuthLayout>
    );
}

export default Land;
