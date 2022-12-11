import styled from 'styled-components';

import type { BoxLayoutProps } from './types';

export const BoxContainer = styled.div<BoxLayoutProps>`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  position: ${({ position }) => position};
  gap: ${({ gap }) => gap}px;
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.background.color.primary};

  border: 1px solid;
  border-radius: 10px;
  border-weight: 1px;
  border-color: ${({ theme }) => theme.background.border};

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
