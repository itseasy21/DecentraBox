import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import ProcessLogin from './pages/ProcessLogin';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import theme from './theme/theme';
import Landing from './pages/Landing';

const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route path="/">
                <Route exact path="/" component={SignIn} />
                <Route exact path="/signup" component={SignUp} />
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/processLogin/:email" component={ProcessLogin} />
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
