import styled from 'styled-components';

import type { BoxLayoutProps } from './types';

export const BoxContainer = styled.div<BoxLayoutProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap}px;
  width: 100%:
  height: 100%;
  background: #ffffff;
  border: 1px solid;
  border-radius: 10px;
  border-weight: 1px;
  border-color: #f0f0f0;
  padding: ${({ padding }) => (padding ? `${padding}px` : '1.2rem')};
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
  padding-left: ${({ paddingLeft }) => paddingLeft}px;
  padding-right: ${({ paddingRight }) => paddingRight}px;

  margin: ${({ margin }) => margin}px;
  margin-top: ${({ marginTop }) => marginTop}px;
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
`;
