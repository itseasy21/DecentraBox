import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import theme from './theme/theme';

const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                <Route exact path="/" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                {/* <Route path="/trending" component={Trending} />
                <Route path="/global" component={GlobalMarket} /> */}
            </Route>
        </Switch>
    );
};

const App: React.FC = () => {
    return (
        <ChakraProvider theme={theme} resetCSS={false}>
            <Router>
                <AppRoutes />
            </Router>
        </ChakraProvider>
    );
};

export default App;
