import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import theme from './theme/theme';
import Dashboard from './pages/Dashboard';
import Callback from './pages/Callback';
import Profile from './pages/Profile';
import Land from './pages/Land';


const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/land" component={Land} />
                {/* <Route exact path="/callback" component={Callback} />
                <Route path="*" component={Profile} /> */}
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
