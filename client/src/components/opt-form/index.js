import React from 'react';
import {
  Container,
  Input,
  Break,
  Button,
  Text,
  InputLabel,
  WrapDescription,
  ErrorMessage,
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.WrapDescription = function OptFormWrapDescription({
  active,
  children,
  setInputValue,
  ...restProps
}) {
  return (
    <WrapDescription {...restProps}>
      {children}
      <Input
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <InputLabel active={active}>Địa chỉ email</InputLabel>
    </WrapDescription>
  );
};

OptForm.ErrorMessage = function OptFormErrorMessage({
  children,
  ...restProps
}) {
  return <ErrorMessage {...restProps}>{children}</ErrorMessage>;
};
OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
