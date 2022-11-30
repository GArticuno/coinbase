import { BsThreeDots } from 'react-icons/bs';

import Box from '../Box';
import { TooltipButton } from './styles';
import { CardProps } from './types';

const Card = ({ children }: CardProps) => (
  <Box
    display='flex'
    flexDirection='row'
    justifyContent='center'
    alignItems='center'
    position='relative'
    gap={16}
    padding={25}
    paddingRight={41}
  >
    <TooltipButton>
      <BsThreeDots color='#858585' size={16} />
    </TooltipButton>
    {children}
  </Box>
);

export default Card;
