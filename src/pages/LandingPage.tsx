import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Grid,
    Heading,
    Input,
    Link,
    Spacer,
    Stack,
    Switch,
    Text,
    useColorModeValue,
    Img,
} from '@chakra-ui/react';
import React from 'react';
import theme from '../theme/theme';

import Card from '../theme/components/Card';

import CardHeader from '../theme/components/CardHeader';

import CardBody from '../theme/components/CardBody';

// Assets
import signInImage from '../assets/img/decentrabox.png';
import logoWhiteBg from '../assets/img/logoWhiteBg.jpeg';
import bgheader from '../assets/img/landingheader.png';
import ipfs from '../assets/img/ipfs.png'

import AuthLayout from '../layouts/AuthLayout';
import { property } from 'lodash';
import SignIn from './SignIn';

function LandingPage() {
    // Chakra color mode
    const titleColor = useColorModeValue('#FF6100', 'teal.200');
    const textColor = useColorModeValue('gray.400', 'white');
    return (


        <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">




            <Box
                position="absolute"
                minH={{ base: '200vh', md: '75vh' }}
                w={{ md: 'calc(100vw - 50px)' }}
                borderRadius={{ md: '15px' }}
                left="0"
                right="0"
                bgRepeat="no-repeat"
                overflow="hidden"
                zIndex="-1"
                top="0"
                bgImage={bgheader}
                bgSize="cover"
                // bg="orange"
                mx={{ md: 'auto' }}
                mt={{ md: '14px' }}
            ></Box>

            <Flex
                // minH={{ base: '100vh', md: '50vh' }}
                w={{ md: 'calc(100vw - 80px)' }}
                // left="0"
                // right="0"
                // overflow="hidden"
                // zIndex="-1"

                mx={{ md: 'auto' }}
                mt={{ md: '30px' }}
                mr={{ md: '30px' }}
                ml={{ md: '30px' }}
            >
                <Box p="2">
                    <Heading size="md" color="white">DecentraBox</Heading>
                </Box>
                <Spacer />
                <Box>

                    <Link color="white">Log in</Link>
                    <Button colorScheme="white" ml="4">
                        <Text color="#FF6100">Sign Up</Text>
                    </Button>
                </Box>
            </Flex>

            <Flex position="relative">
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    // justifyContent="space-between"
                    direction="column"
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
                            // mt={{ md: '50px', lg: '80px' }}
                        >
                            <Heading color="white" fontSize="32px" mb="10px">
                                Welcome Back
                            </Heading>
                            <Text mb="36px" ms="4px" color="white" fontWeight="bold" fontSize="14px">
                                Enter your email and password to sign in
                            </Text>
                        </Flex>
                    </Flex>
                    <Box
                        // display={{ base: 'none', md: 'block' }}
                        overflowX="hidden"
                        h="100%"
                        w="40vw"
                        position="absolute"
                        // alignItems="center"
                        left="0px"
                        // right="0px"
                        mr="30px"
                        mt="150px"
                    >
                        <Box
                            bgImage={logoWhiteBg}
                            w="100%"
                            h="100%"
                            bgSize="cover"
                            bgPosition="50%"
                            // position="absolute"
                            borderBottomLeftRadius="20px"
                            borderRadius="30px"
                            shadow="10rem"
                        ></Box>
                    </Box>
                </Flex>
                
            </Flex>

            
                    {/* <Flex
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
                            // mt={{ md: '50px', lg: '80px' }}
                        >
                            <Heading color="black" fontSize="32px" mb="10px">
                                Welcome Back yoo
                            </Heading>
                            <Text mb="36px" ms="4px" color="black" fontWeight="bold" fontSize="14px">
                                Enter your email and password to sign in
                            </Text>
                        </Flex>
                    </Flex> */}
                    <Flex
                    // h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    // justifyContent="space-between"
                    // mb="30px"
                    // pt={{ sm: '100px', md: '0px' }}
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
                            // mt={{ md: '50px', lg: '80px' }}
                        >
                            <Heading color="black" fontSize="32px" mb="10px">
                                Welcome Back
                            </Heading>
                            <Text mb="36px" ms="4px" color="black" fontWeight="bold" fontSize="14px">
                                Enter your email and password to sign in
                            </Text>
                        </Flex>
                    </Flex>
                    </Flex>

                    {/* <Flex direction="column" textAlign="center" justifyContent="center" align="center" mb="30px"> */}
                {/* <Text fontSize="4xl" color="black" fontWeight="bold" mb="5px">
                    LOREM IPSUM LOREM IPSUM
                </Text> */}
                {/* <Grid templateColumns="repeat(1, 1fr)" justifyContent="center" gap={6} width="80%">
                    <Box w="100%" h="250px" bg={textColor} borderRadius={{ md: '15px' }} */}
                    {/* bgImage={bgheader}
                        bgSize="cover" shadow="2xl"/>
                    <Box w="100%" h="250px" bg={titleColor} borderRadius={{ md: '15px' }} 
                    // bgImage={bgheader}

                        bgSize="cover" 
                        
                        >
                            <Flex
                             direction="row"
                             textAlign="center" justifyContent="center" align="center"
                            >
                                <Text color="black">
                                    HEY There
                                </Text>
                                <Box
                                    w="200px"
                                    h="200px"
                                    bg="black"
                                    borderRadius="30px"
                                    ml="200px"
                                    mt="25px"
                                    
                                >
                                {/* <img src={logoWhiteBg} alt="" /> */}
                                {/* </Box>
                                

                            </Flex>

                            </Box>

                </Grid>

            </Flex> */} 
                   


{/* <Flex position="relative" mb="40px" mt="100px"> */}
                <Flex
                    h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
                    w="100%"
                    maxW="1044px"
                    mx="auto"
                    justifyContent="space-between"
                    mb="230px"
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
                        mr="20px"
                        mb="40px"
                    >
                        <Box
                            bgImage={ipfs}
                            w="100%"
                            h="100%"
                            bgSize="cover"
                            bgPosition="50%"
                            position="absolute"
                            borderBottomLeftRadius="20px"
                            boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                        ></Box>
                    </Box>
                </Flex>
                </Flex>
        

    );
}
export default LandingPage;
