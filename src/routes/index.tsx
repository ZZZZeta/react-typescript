import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import MyRoute from '../components/Logic/MyRoute';

const Home = lazy(() => import('../pages/Home'));
const Posts = lazy(() => import('../pages/Posts'));

const Router = () => (
    <BrowserRouter>
        <Suspense fallback="Loading">
            <Switch>
                <MyRoute exact path="/" component={Home} />
                <MyRoute exact path="/posts" component={Posts} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Router;
