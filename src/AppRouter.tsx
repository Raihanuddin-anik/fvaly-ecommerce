import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails/ProductDetails';
const Help = React.lazy(() => import('./pages/Help/Help'));
const Home = React.lazy(() => import('./pages/Home/Home'));

// eslint-disable-next-line react/prop-types
const AppRouter: React.FC = ({ children }) => {
    return (
        <Router>
            {children}
            <Switch>
                <Suspense fallback={<div>Loading...</div>}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/help" component={Help} />
                    <Route
                        exact
                        path="/product/:id"
                        component={ProductDetails}
                    />
                </Suspense>
            </Switch>
        </Router>
    );
};

export default AppRouter;
