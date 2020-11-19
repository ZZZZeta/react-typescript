import React, { ComponentType } from 'react';
import Template from '../../components/Base/Template';

const withTemplate = <T extends {}>(WrappedComponent: ComponentType<T>) => (
  props: T
) => {
  return (
    <Template>
      <WrappedComponent {...props} />
    </Template>
  );
};

export default withTemplate;
