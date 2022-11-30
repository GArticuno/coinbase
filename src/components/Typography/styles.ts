import styled, { css } from 'styled-components';

import type { TypographyLayoutProps } from './types';

export const TypographyContainer = styled.div<TypographyLayoutProps>`
  font-family: 'Poppins', sans-serif;
  line-height: 18px;
  ${(props) => {
    switch (props.variant) {
      case 'white':
        return css`
          color: #ffffff;
        `;
      case 'secondary':
        return css`
          color: #fd749b;
        `;
      case 'tertiary':
        return css`
          color: #1cd1a1;
        `;
      default:
        return css`
          color: #858585;
        `;
    }
  }}
  ${(props) => {
    switch (props.fontSize) {
      case 'xs':
        return css`
          font-size: 0.5rem;
        `;
      case 's':
        return css`
          font-size: 0.75rem;
        `;
      case 'l':
        return css`
          font-size: 1.5rem;
        `;
      case 'xl':
        return css`
          font-size: 2rem;
        `;
      case 'xxl':
        return css`
          font-size: 2.5rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}
  ${(props) => {
    switch (props.fontWeight) {
      case 'light':
        return css`
          font-weight: 300;
        `;
      case 'medium':
        return css`
          font-weight: 500;
        `;
      case 'bold':
        return css`
          font-weight: 700;
        `;
      default:
        return css`
          font-weight: 400;
        `;
    }
  }}
`;
