import Typography from 'components/Typography';
import { CircleProgress } from 'react-gradient-progress';

import { Container, TextContainer } from './styles';
import type { PercentBarProps } from './types';

const PercentBar = ({ percent, size = 120, text }: PercentBarProps) => (
  <Container>
    <CircleProgress
      percentage={percent}
      width={size}
      strokeWidth={10}
      fontColor='#ffffff'
      primaryColor={['#281ac8', '#fd749b']}
      secondaryColor='#FAA9C6'
    />
    <TextContainer size={size}>
      <Typography variant='secondary' fontWeight='bold' fontSize='s'>
        {text}
      </Typography>
    </TextContainer>
  </Container>
);

export default PercentBar;
