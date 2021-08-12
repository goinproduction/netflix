import React from 'react';
import {
  Container,
  Error,
  Base,
  Title,
  Text,
  TextSmall,
  Link,
  WrapInput,
  Input,
  InputError,
  Submit,
  Recaptcha,
  LoginHelp,
  RememberMe,
  HelpLink,
  Checkbox,
  LabelCheckbox,
  LabelCheckboxText,
  FBLogin,
  FBIcon,
  FBText,
} from './styles/form';

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Recaptcha = function FormRecaptcha({ children, ...restProps }) {
  return <Recaptcha {...restProps}>{children}</Recaptcha>;
};
Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.WrapInput = function FormWrapInput({ children, ...restProps }) {
  return <WrapInput {...restProps}>{children}</WrapInput>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.InputError = function FormInputError({ children, ...restProps }) {
  return <InputError {...restProps}>{children}</InputError>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.LoginHelp = function FormLoginHelp({ children, ...restProps }) {
  return <LoginHelp {...restProps}>{children}</LoginHelp>;
};

Form.RememberMe = function FormRememberMe({ children, ...restProps }) {
  return <RememberMe {...restProps}>{children}</RememberMe>;
};

Form.HelpLink = function FormHelpLink({ children, ...restProps }) {
  return <HelpLink {...restProps}>{children}</HelpLink>;
};

Form.Checkbox = function FormCheckbox({
  checkedState,
  ...restProps
}) {
  return (
    <Checkbox
      {...restProps}
      type="checkbox"
      checked={checkedState}
    />
  );
};

Form.LabelCheckbox = function FormLabelCheckbox({ ...restProps }) {
  return <LabelCheckbox {...restProps} />;
};

Form.LabelCheckboxText = function FormLabelCheckboxText({ ...restProps }) {
  return <LabelCheckboxText {...restProps} />;
};

Form.FBLogin = function FormFBLogin({ children, ...restProps }) {
  return <FBLogin {...restProps}>{children}</FBLogin>;
};

Form.FBIcon = function FormFBIcon({ ...restProps }) {
  return <FBIcon {...restProps} src="./images/icons/fb.png" />;
};

Form.FBText = function FormFBText({ children, ...restProps }) {
  return <FBText {...restProps}>{children}</FBText>;
};
