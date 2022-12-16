import styled, { css } from 'styled-components';

import type { ChipLayoutProps } from './types';

export const ChipContainer = styled.div<ChipLayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  padding: ${({ paddingHorizontal, paddingVertical }) =>
    `${paddingVertical ?? 5}px ${paddingHorizontal ?? 14}px`};
  ${({ theme, variantColor, variantGradient }) => {
    if (variantColor)
      return css`
        background: ${theme.text[variantColor]};
      `;
    if (variantGradient)
      return css`
        background: linear-gradient(
          ${theme.gradient[variantGradient].head},
          ${theme.gradient[variantGradient].tail}
        );
      `;
    return css`
      background: linear-gradient(${theme.gradient.primary.head}, ${theme.gradient.primary.tail});
    `;
  }};
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
