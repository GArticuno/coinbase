import { IconContainer } from './styles';
import type { IconProps } from './types';

const Icon = ({ children, ...props }: IconProps) => (
  <IconContainer {...props}>{children}</IconContainer>
);

export default Icon;
