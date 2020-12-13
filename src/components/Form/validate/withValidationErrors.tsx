import React from 'react';

type ValidationErrorProps = {
  meta: {
    error: string;
    touched: boolean;
  };
};

const withValidationErrors = <ComponentProps,>(
  WrappedComponent: React.FC<ComponentProps>
) => (props: ComponentProps & ValidationErrorProps) => {
  const { meta } = props;
  const hasError = meta.error && meta.touched;

  return (
    <div>
      <WrappedComponent {...props} />
      <span style={{ color: 'red' }}>{hasError && meta.error}</span>
    </div>
  );
};

export default withValidationErrors;
