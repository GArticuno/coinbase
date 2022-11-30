import { TypographyContainer } from './styles';
import { TypographyProps } from './types';

const Typography = ({ children, ...props }: TypographyProps) => (
  <TypographyContainer {...props}>{children}</TypographyContainer>
);

export default Typography;
