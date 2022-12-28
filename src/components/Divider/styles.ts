import styled from 'styled-components';

import { DividerProps } from './types';

export const DividerStyled = styled.div<DividerProps>`
  width: ${({ orientation }) => (orientation === 'horizontal' ? '100%' : '1px')};
  height: ${({ orientation }) => (orientation === 'vertical' ? '100%' : '1px')};
  background: ${({ theme }) => theme.colors.border};
`;
