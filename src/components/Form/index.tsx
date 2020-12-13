import React, { FC } from 'react';
import { Field } from 'react-final-form';
import Input from './BaseFields/Input';

export const components = {
  input: Input as FC,
};

type FieldProps = {
  name: string;
  component: FC;
  placeholder?: string;
  validate?: (value: any) => void;
};

const FieldGenerator: FC<FieldProps> = (props) => {
  const { name, component: Component, ...rest } = props;

  return <Field name={name} component={Component} {...rest} />;
};

export default FieldGenerator;
