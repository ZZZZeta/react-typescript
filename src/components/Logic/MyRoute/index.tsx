import React from 'react';
import withTemplate from "../../../hocs/withTemplate";
import {Route, RouteProps} from 'react-router';

const MyRoute = ({ component, ...rest }: RouteProps) => {
    const Component = withTemplate(component as React.ComponentClass<{}> | React.FunctionComponent<{}>);

    return <Route {...rest} component={Component} />;
};

export default MyRoute;
