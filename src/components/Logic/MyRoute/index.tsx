import React, { ComponentType } from 'react';
import withTemplate from '../../../hocs/withTemplate';
import { Route, RouteProps } from 'react-router';

interface MyRouteInterface extends RouteProps {
  component: ComponentType;
}

const MyRoute = ({ component, ...rest }: MyRouteInterface) => {
  const Component = withTemplate(component);

  return <Route {...rest} component={Component} />;
};

export default MyRoute;
