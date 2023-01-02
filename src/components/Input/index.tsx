import { InputContainer, InputStyled, InputWrapper } from './styles';
import type { InputProps } from './types';

const Input = ({
  value,
  onChange,
  variant,
  placeholder,
  iconLeft,
  iconRight,
  ...props
}: InputProps) => (
  <InputWrapper variant={variant}>
    <InputContainer>
      {iconLeft && iconLeft}
      <InputStyled value={value} onChange={onChange} placeholder={placeholder} {...props} />
      {iconRight && iconRight}
    </InputContainer>
  </InputWrapper>
);

export default Input;
