import styled from 'styled-components';

import type { InputWrapperProps } from './types';

export const InputWrapper = styled.div<InputWrapperProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 1.1px;
  background: ${({ variant }) =>
    variant === 'primary' ? 'linear-gradient(#FD749B, #281AC8)' : '#f0f0f0'};
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  background: #ffffff;
`;

export const InputStyled = styled.input`
  color: #858585;
  font-size: 0.75rem;
  border: none;
  margin: 0rem 0.5rem;
`;
