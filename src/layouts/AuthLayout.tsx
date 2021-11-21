import { Box } from '@chakra-ui/react';
import React from 'react';

import { AuthHeader } from '../components/Header';

const AuthLayout: React.FC = (props: any) => {
    return (
        <Box width="100%">
            <AuthHeader />
            {props.children}
        </Box>
    );
};

export default AuthLayout;
