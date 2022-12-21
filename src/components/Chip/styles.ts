import styled, { GradientProps, TextVariantProps, css } from 'styled-components';

import type { ChipLayoutProps } from './types';

export const ChipContainer = styled.div<ChipLayoutProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  width: ${({ width }) => width}px;
  max-width: ${({ maxWidth }) => maxWidth}px;
  padding: ${({ paddingHorizontal, paddingVertical }) =>
    `${paddingVertical ?? 5}px ${paddingHorizontal ?? 14}px`};
  ${({ theme, variant }) => {
    if (variant.includes('text')) {
      const textType = variant.split('.')[1] as keyof TextVariantProps;
      return css`
        background: ${theme.colors.text[textType]};
      `;
    }
    if (variant.includes('gradient')) {
      const gradientType = variant.split('.')[1] as keyof GradientProps;
      return css`
        background: linear-gradient(
          ${theme.colors.gradient[gradientType].head},
          ${theme.colors.gradient[gradientType].tail}
        );
      `;
    }
    return css`
      background: linear-gradient(
        ${theme.colors.gradient.primary.head},
        ${theme.colors.gradient.primary.tail}
      );
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
