import { InputContainer, InputStyled, InputWrapper } from './styles';
import type { InputProps } from './types';

const Input = ({ value, onChange, variant, placeholder, iconLeft, iconRight }: InputProps) => (
  <InputWrapper variant={variant}>
    <InputContainer>
      {iconLeft}
      <InputStyled value={value} onChange={onChange} placeholder={placeholder} />
      {iconRight}
    </InputContainer>
  </InputWrapper>
);

export default Input;
