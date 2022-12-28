/* eslint-disable quotes */
import styled, { css } from 'styled-components';

import type { BoxLayoutProps } from './types';

export const BoxContainer = styled.div<BoxLayoutProps>`
  display: ${({ display }) => display};
  flex: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  align-self: ${({ alignSelf }) => alignSelf};
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap}px;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth}px;
  height: auto;
  min-height: ${({ minHeight }) => minHeight}px;
  background: ${({ theme, background }) => background && theme.colors.background[background]};
  ${({ theme, hasBorder }) =>
    hasBorder &&
    css`
      border: 1px solid;
      border-radius: 10px;
      border-weight: 1px;
      border-color: ${theme.colors.border};
    `};

  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  left: ${({ left }) => left};
  right: ${({ right }) => right};

  padding: ${({ padding }) => padding}px;
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;

  margin: ${({ margin }) => margin}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
  z-index: 1;

  .wave-background {
    width: 100vw;
    object-fit: cover;
    border-radius: 10px;
    z-index: -2;
  }
`;
