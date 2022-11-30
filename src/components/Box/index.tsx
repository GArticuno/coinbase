import { BoxContainer } from './styles';
import type { BoxProps } from './types';

const Box = ({ children, ...props }: BoxProps) => (
  <BoxContainer {...props}>{children}</BoxContainer>
);

export default Box;
