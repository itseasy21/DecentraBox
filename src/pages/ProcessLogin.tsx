import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, useParams } from 'react-router-dom';

import useLocalStorage from '../hooks/useLocalStorage';
import { UserResponseDTO } from '../interfaces/UserResponseDTO';

export const ProcessLogin: React.FC = () => {
    const { email } = useParams<{ email: string }>();
    const [currentUser, setCurrentUser] = useLocalStorage<UserResponseDTO | undefined>('DBOX_USER', undefined);

    useEffect(() => {
        fetchKey();
    }, []);

    const fetchKey = async () => {
        const userEmail = Buffer.from(email, 'base64').toString('ascii');
        //fetch browser key
        const key = await axios.get('https://soyrm3nmp9.execute-api.ap-southeast-2.amazonaws.com/Prod/getapi/');
        //add to local storage
        const tmpUser: UserResponseDTO = {
            email: userEmail,
            token: key.data.token,
            expiry: key.data.expiry,
        };
        setCurrentUser(tmpUser);
    };

    return <>{currentUser ? <Redirect to="/dashboard"></Redirect> : <Redirect to="/"></Redirect>}</>;
};

export default ProcessLogin;
