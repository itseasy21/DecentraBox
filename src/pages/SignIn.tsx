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
import { useCallback, useState } from "react";
import { useHistory } from "react-router";
import nodeMailer from "nodemailer";

import { magic } from '../magic';

// Assets
import signInImage from '../assets/img/decentrabox.png';
import AuthLayout from '../layouts/AuthLayout';

import { Magic } from 'magic-sdk';
// import { Magic } from "@magic-sdk/admin";

const m = new Magic('pk_live_37CEDD8B3DB56B54');
const serverUrl = window.location.href;



async function sendLink(){
    
    // const emailInput = document.getElementById("email");
    const email = (document.getElementById("email") as HTMLInputElement).value;
    let message = "";
    console.log("Email: ", email);
    if(!email){
        message = "invalid";
        console.log("invalid");
    }
    else{
        console.log("valid");
        // const transport = nodeMailer.createTransport({
        //     host: process.env.EMAIL_HOST,
        //     port: 587,
        //     auth: {
        //         user: process.env.EMAIL_USER,
        //         pass: process.env.EMAIL_PASSWORD
        //     }
        //   });
          
        //   // Make email template for magic link
        //   const emailTemplate = ({ email, link  }) => `
        //     <h2>Hey ${email}</h2>
        //     <p>Here's the login link you just requested:</p>
        //     <p>${link}</p>
        //   `
        //   const mailOptions = {
        //     from: "You Know",
        //     html: emailTemplate({
        //       email,
        //       link: `http://localhost:3000/dashboard`,
        //     }),
        //     subject: "Your Magic Link",
        //     to: email,
        //   };
        //   return transport.sendMail(mailOptions, (error) => {
        //     if (error) {
        //       message="not-sent: " + error
        //     } else {
        //       message="sent"
        //     }
        //     console.log("End: ", message);
        //   });

        // const didToken = await Magic.auth.loginWithMagicLink({ email });
        //   const res = await fetch(`${serverUrl}user/login`, {
        //     headers: new Headers({
        //       Authorization: "Bearer " + didToken
        //     }),
        //     method: "POST"
        //   });
        //  if (res.status == 200){
        //      console.log("logged in!");
        //  } 

    }
}

function SignIn() {
    const [isLoggingIn, setIsLoggingIn] = useState(false);
  const history = useHistory();
    
    const login = useCallback(async()=>{
        const email = (document.getElementById("email") as HTMLInputElement).value;
        setIsLoggingIn(true);

    try {
      await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL("/callback", window.location.origin).href,
      });
      history.push("/");
    } catch {
      setIsLoggingIn(false);
    }
    },[])

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
                            <FormControl>
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Email
                                </FormLabel>
                                <Input
                                    id="email"
                                    borderRadius="15px"
                                    mb="24px"
                                    fontSize="sm"
                                    type="text"
                                    placeholder="Your email adress"
                                    size="lg"
                                />
                                <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                                    Password
                                </FormLabel>
                                <Input
                                    borderRadius="15px"
                                    mb="36px"
                                    fontSize="sm"
                                    type="password"
                                    placeholder="Your password"
                                    size="lg"
                                />
                                <FormControl display="flex" alignItems="center">
                                    <Switch id="remember-login" colorScheme="teal" me="10px" />
                                    <FormLabel htmlFor="remember-login" mb="0" ms="1" fontWeight="normal">
                                        Remember me
                                    </FormLabel>
                                </FormControl>
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
                                    // onClick={login}
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
        </AuthLayout>
    );
}

export default SignIn;
