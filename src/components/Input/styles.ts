import styled from 'styled-components';

import type { InputWrapperProps } from './types';

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 1.1px;
  background: ${({ variant, theme }) =>
    variant === 'primary'
      ? `linear-gradient(
      ${theme.gradient.primary.head},
      ${theme.gradient.primary.tail}
    )`
      : theme.background.border};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.background.color.primary};
`;

export const InputStyled = styled.input`
  color: ${({ theme }) => theme.text.primary};
  font-size: 0.75rem;
  border: none;
  margin: 0rem 0.5rem;
`;
