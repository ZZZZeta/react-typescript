import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import {Route} from 'react-router-dom'
const Home = lazy(() => import('../pages/Home'));
const Posts = lazy(() => import('../pages/Posts'));

const Router = () => (
    <BrowserRouter>
        <Suspense fallback="Loading">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/posts" component={Posts} />
            </Switch>
        </Suspense>
    </BrowserRouter>
);

export default Router;
