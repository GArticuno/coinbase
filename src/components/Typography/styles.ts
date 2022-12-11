import styled from 'styled-components';

import type { TypographyLayoutProps } from './types';

export const TypographyContainer = styled.div<TypographyLayoutProps>`
  font-family: 'Poppins', sans-serif;
  line-height: 18px;
  color: ${({ theme, variant }) => (variant ? theme.text[variant] : theme.text.primary)};
  font-size: ${({ theme, fontSize }) => (fontSize ? theme.font.size[fontSize] : theme.font.size.m)};
  font-weight: ${({ theme, fontWeight }) =>
    fontWeight ? theme.font.weight[fontWeight] : theme.font.weight.regular};
`;
