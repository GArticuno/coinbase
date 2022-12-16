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
        fontColor={theme.background.color.primary}
        primaryColor={[theme.gradient.primary.head, theme.gradient.primary.tail]}
        secondaryColor={theme.text.percent}
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
