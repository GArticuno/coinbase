import Typography from 'components/Typography';
import { CircleProgress } from 'react-gradient-progress';
import { useTheme } from 'styled-components';

import { Container, TextContainer } from './styles';
import type { PercentBarProps } from './types';

const PercentBar = ({ percent, size = 120, text }: PercentBarProps) => {
  const theme = useTheme();
  return (
    <Container>
      <CircleProgress
        percentage={percent}
        width={size}
        strokeWidth={10}
        fontColor={theme.colors.background.primary}
        primaryColor={[theme.colors.gradient.primary.head, theme.colors.gradient.primary.tail]}
        secondaryColor={theme.colors.text.percent}
      />
      <TextContainer size={size}>
        <Typography variant='secondary' fontWeight='bold' fontSize='s'>
          {text}
        </Typography>
      </TextContainer>
    </Container>
  );
};

export default PercentBar;
