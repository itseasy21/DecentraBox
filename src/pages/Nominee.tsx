import {
    Box,
    Button,
    ChakraProps,
    Flex,
    Input,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

import useLocalStorage from '../hooks/useLocalStorage';
import { UserResponseDTO } from '../interfaces/UserResponseDTO';
import GeneralLayout from '../layouts/GeneralLayout';

interface ProfileMenuBtnIProps extends ChakraProps {
    active?: boolean;
    onClick?: () => void;
}
export const ProfileMenuButton: React.FC<ProfileMenuBtnIProps> = ({ children, active, onClick, ...rest }) => {
    return (
        <Flex
            rounded="md"
            bg={active ? '#FF6100' : 'none'}
            _hover={{
                bg: ['primary.100', 'primary.100', 'primary.600', 'primary.600'],
                color: active ? 'white' : useColorModeValue('gray.500', 'gray.400'),
            }}
            w="100%"
            h="50px"
            align="center"
            cursor={'pointer'}
            {...rest}
            pl="24px"
            color={active ? 'white' : useColorModeValue('black', 'gray.500')}
            fontWeight="bold"
            onClick={onClick}
        >
            {children}
        </Flex>
    );
};

export const Nominee: React.FC = () => {
    const [page, setPage] = useState<'profile' | 'appearance'>('profile');
    const { colorMode, toggleColorMode } = useColorMode();
    const textColor = useColorModeValue('gray.600', 'gray.500');
    const [currentUser, setCurrentUser] = useLocalStorage<UserResponseDTO | undefined>('DBOX_USER', undefined);

    //Profile Form Data
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [country, setCountry] = useState<string>();
    const [city, setCity] = useState<string>();
    const [postCode, setPostCode] = useState<number>();
    const [countryCode, setCountryCode] = useState<string>();
    const [phoneNumber, setPhoneNumber] = useState<number>();
    const [website, setWebsite] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [isLoading, setIsLoading] = useState<boolean>();

    useEffect(() => {
        const userData = currentUser;
        // if (userData) {
        //     userData.NAME && setFirstName(userData.NAME);
        //     userData.LAST_NAME && setLastName(userData.LAST_NAME);
        //     userData.EMAIL && setEmail(userData.EMAIL);
        //     userData.ADDRESS && setAddress(userData.ADDRESS);
        //     userData.POST_CODE && setPostCode(userData.POST_CODE);
        //     userData.CITY && setCity(userData.CITY);
        //     userData.COUNTRY && setCountry(userData.COUNTRY);
        //     userData.ADDRESS && setAddress(userData.ADDRESS);
        //     userData.COUNTRY_CODE && setCountryCode(userData.COUNTRY_CODE);
        //     userData.PHONE_NUMBER && setPhoneNumber(userData.PHONE_NUMBER);
        //     userData.WEBSITE_LINK && setWebsite(userData.WEBSITE_LINK);
        //     userData.USERNAME && setUsername(userData.USERNAME);
        // }
    }, [currentUser]);

    return (
        <GeneralLayout>
            <Flex h="calc(100vh - 70px)" direction={{ base: 'column', md: 'row' }}
            overscrollX="none"
            overflowX="hidden"
            >
        <Box pl={'8px'} w="100%">
            <Text fontSize="24px" align="start" w="100%" pb="24px" ml="29%">
                Choose Your Nominee
            </Text>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Username
                </Text>
                <Input
                    maxW="600px"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    placeholder="Enter a name"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    First Name
                </Text>
                <Input
                    maxW="600px"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    placeholder="Enter a name"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Last Name
                </Text>
                <Input
                    maxW="600px"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                    }}
                    placeholder="Enter a last name"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Email
                </Text>
                <Input
                    maxW="600px"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Enter an email"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Address
                </Text>
                <Input
                    maxW="600px"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    placeholder="Enter an address"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    City
                </Text>
                <Input
                    maxW="600px"
                    value={city}
                    onChange={(e) => {
                        setCity(e.target.value);
                    }}
                    placeholder="Enter a city"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Country
                </Text>
                <Input
                    maxW="600px"
                    value={country}
                    onChange={(e) => {
                        setCountry(e.target.value);
                    }}
                    placeholder="Enter a country"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Postcode
                </Text>
                <Input
                    maxW="600px"
                    value={postCode}
                    type="number"
                    onChange={(e) => {
                        setPostCode(parseInt(e.target.value));
                    }}
                    placeholder="Enter a postcode"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Country Code
                </Text>
                <Input
                    maxW="600px"
                    value={countryCode}
                    onChange={(e) => {
                        setCountryCode(e.target.value);
                    }}
                    placeholder="Enter a country code"
                    borderColor="#FF6100"
                    
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Phone Number
                </Text>
                <Input
                    maxW="600px"
                    value={phoneNumber}
                    type="number"
                    onChange={(e) => {
                        setPhoneNumber(parseInt(e.target.value));
                    }}
                    placeholder="Enter a phone number"
                    borderColor="#FF6100"
                />
            </Stack>
            <Stack spacing={3} pb="24px" alignContent="center" alignItems="center" align="center">
                <Text w="100%" fontWeight="bold" color={textColor} ml="58%">
                    Website
                </Text>
                <Input
                    maxW="600px"
                    value={website}
                    onChange={(e) => {
                        setWebsite(e.target.value);
                    }}
                    placeholder="Enter a website"
                    borderColor="#FF6100"
                />
            </Stack>

            <Button
                isLoading={isLoading}
                // onClick={saveProfile}
                loadingText={'Submitting . . .'}
                color="white"
                bg="#FF6100"
                alignItems="center"
                ml="48%"
            >
                Add Nominee
            </Button>
        </Box>
        </Flex>
        </GeneralLayout>
    );
};

export default Nominee;
