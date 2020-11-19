import React, { ComponentProps, ComponentType } from 'react';
import Template from '../../components/Base/Template';

const withTemplate = (WrappedComponent: ComponentType) => (
  props: ComponentProps<any>
) => {
  return (
    <Template>
      <WrappedComponent {...props} />
    </Template>
  );
};

export default withTemplate;
