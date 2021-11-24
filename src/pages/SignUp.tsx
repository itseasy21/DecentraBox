// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Switch,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import React from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { Redirect } from 'react-router';

// Assets
import BgSignUp from '../assets/img/header.png';
import AuthLayout from '../layouts/AuthLayout';

function SignUp() {
    const titleColor = useColorModeValue('teal.300', 'teal.200');
    const textColor = useColorModeValue('gray.700', 'white');
    const bgColor = useColorModeValue('white', 'gray.700');
    const bgIcons = useColorModeValue('teal.200', 'rgba(255, 255, 255, 0.5)');
    const toast = useToast();
    const toastIdRef = React.useRef<string | number | undefined>();

    function signUP() {
        toastIdRef.current = toast({
            title: 'Success',
            description: 'Proceed to signin please',
            status: 'success',
            duration: 9000,
            isClosable: true,
        });
        return <Redirect to="/signin"></Redirect>;
    }

    return (
        <AuthLayout>
            <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
                <Box
                    position="absolute"
                    minH={{ base: '70vh', md: '50vh' }}
                    w={{ md: 'calc(100vw - 50px)' }}
                    borderRadius={{ md: '15px' }}
                    left="0"
                    right="0"
                    bgRepeat="no-repeat"
                    overflow="hidden"
                    zIndex="-1"
                    top="0"
                    bgImage={BgSignUp}
                    bgSize="cover"
                    mx={{ md: 'auto' }}
                    mt={{ md: '20px' }}
                ></Box>
                <Flex
                    direction="column"
                    textAlign="center"
                    justifyContent="center"
                    align="center"
                    mt="2.5rem"
                    mb="10px"
                >
                    <Text fontSize="4xl" color="white" fontWeight="bold">
                        Welcome!
                    </Text>
                    <Text
                        fontSize="md"
                        color="white"
                        fontWeight="normal"
                        mt="10px"
                        w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
                    >
                        Use these awesome forms to login or create new account in your project for free.
                    </Text>
                </Flex>
                <Flex alignItems="center" justifyContent="center" mb="60px">
                    <Flex
                        direction="column"
                        w="445px"
                        background="transparent"
                        borderRadius="15px"
                        p="40px"
                        mx={{ base: '100px' }}
                        bg={bgColor}
                        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
                    >
                        <Text fontSize="xl" color={textColor} fontWeight="bold" textAlign="center" mb="22px">
                            Register With
                        </Text>
                        <HStack spacing="15px" justify="center" mb="22px">
                            <Flex
                                justify="center"
                                align="center"
                                w="75px"
                                h="75px"
                                borderRadius="15px"
                                border="1px solid lightgray"
                                cursor="pointer"
                                transition="all .25s ease"
                                _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
                            >
                                <Link href="#">
                                    <Icon as={FaFacebook} w="30px" h="30px" _hover={{ filter: 'brightness(120%)' }} />
                                </Link>
                            </Flex>
                            <Flex
                                justify="center"
                                align="center"
                                w="75px"
                                h="75px"
                                borderRadius="15px"
                                border="1px solid lightgray"
                                cursor="pointer"
                                transition="all .25s ease"
                                _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
                            >
                                <Link href="#">
                                    <Icon as={FaApple} w="30px" h="30px" _hover={{ filter: 'brightness(120%)' }} />
                                </Link>
                            </Flex>
                            <Flex
                                justify="center"
                                align="center"
                                w="75px"
                                h="75px"
                                borderRadius="15px"
                                border="1px solid lightgray"
                                cursor="pointer"
                                transition="all .25s ease"
                                _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
                            >
                                <Link href="#">
                                    <Icon as={FaGoogle} w="30px" h="30px" _hover={{ filter: 'brightness(120%)' }} />
                                </Link>
                            </Flex>
                        </HStack>
                        <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">
                            or
                        </Text>
                        <FormControl>
                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                Name
                            </FormLabel>
                            <Input
                                fontSize="sm"
                                ms="4px"
                                borderRadius="15px"
                                type="text"
                                placeholder="Your full name"
                                mb="24px"
                                size="lg"
                            />
                            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                Email
                            </FormLabel>
                            <Input
                                fontSize="sm"
                                ms="4px"
                                borderRadius="15px"
                                type="email"
                                placeholder="Your email address"
                                mb="24px"
                                size="lg"
                            />

                            <FormControl display="flex" alignItems="center" mb="24px">
                                <Switch id="remember-login" colorScheme="teal" me="10px" />
                                <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                                    Remember me
                                </FormLabel>
                            </FormControl>
                            <Button
                                type="submit"
                                bg="#FF6100"
                                fontSize="10px"
                                color="white"
                                fontWeight="bold"
                                w="100%"
                                h="45"
                                mb="24px"
                                _hover={{
                                    bg: '#ff8400',
                                }}
                                _active={{
                                    bg: '#ff8400',
                                }}
                                onClick={signUP}
                            >
                                SIGN UP
                            </Button>
                        </FormControl>
                        <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
                            <Text color="#FF6100" fontWeight="medium">
                                Already have an account?
                                <Link href="/signin" color="#ff6a00" as="span" ms="5px" fontWeight="bold">
                                    Sign In
                                </Link>
                            </Text>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </AuthLayout>
    );
}

export default SignUp;
