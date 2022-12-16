import { ChipContainer } from './styles';
import type { ChipProps } from './types';

const Chip = ({ children, ...props }: ChipProps) => (
  <ChipContainer {...props}>{children}</ChipContainer>
);

export default Chip;
