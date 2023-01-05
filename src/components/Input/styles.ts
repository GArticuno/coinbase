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
      ${theme.colors.gradient.primary.head},
      ${theme.colors.gradient.primary.tail}
    )`
      : theme.colors.border};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.background.primary};
`;

export const InputStyled = styled.input`
  background: ${({ theme }) => theme.colors.background.primary};
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.75rem;
  border: none;
  margin: 0rem 0.5rem;
`;
