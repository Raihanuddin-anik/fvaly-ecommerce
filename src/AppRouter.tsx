import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
const Help = React.lazy(() => import('./pages/Help/Help'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const LogIn = React.lazy(() => import('./pages/LogIn/LogIn'));
const Checkout = React.lazy(() => import('./pages/CheckOut/CheckOut'));
const ProductDetails = React.lazy(
    () => import('./pages/ProductDetails/ProductDetails')
);

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
                    <Route exact path="/checkout" component={Checkout} />
                    <Route exact path="/login" component={LogIn} />
                </Suspense>
            </Switch>
        </Router>
    );
};

export default AppRouter;
