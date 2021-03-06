import React, { ChangeEvent, FC, FunctionComponent } from 'react';
import { Input as AntInput } from 'antd';
import withValidationErrors from '../../validate/withValidationErrors';

type PasswordProps = {
  prefix: FunctionComponent;
  placeholder: string;
  onChange?: (e: ChangeEvent) => void;
  input: {
    name: string;
    value: string | number;
    onChange: (e: ChangeEvent) => void;
    onBlur: () => void;
  };
};

const Password: FC<PasswordProps> = ({
  prefix,
  placeholder,
  input,
  onChange: onChangeCb,
  ...rest
}) => {
  const { name, value, onChange: onChangeForm, onBlur } = input;

  const onChange = (e: ChangeEvent) => {
    onChangeForm(e);
    if (typeof onChangeCb === 'function') onChangeCb(e);
  };

  return (
    <AntInput.Password
      type="text"
      value={value}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      prefix={prefix}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default withValidationErrors(Password);
