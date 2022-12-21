import styled, { css } from 'styled-components';

import type { IconLayoutProps } from './types';

export const IconContainer = styled.div<IconLayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  padding: 5px;
  background: ${({ variant, theme }) =>
    variant === 'default'
      ? `linear-gradient(
      ${theme.colors.gradient.primary.head},
      ${theme.colors.gradient.primary.tail}
    )`
      : theme.colors.background.primary};
  ${({ onClick }) =>
    onClick &&
    css`
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        opacity: 0.5;
      }
    `}
`;
