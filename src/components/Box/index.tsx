import Image from 'next/image';

import { BoxContainer } from './styles';
import type { BoxProps } from './types';

const Box = ({ children, isGradientBackground, padding, ...props }: BoxProps) => (
  <BoxContainer padding={padding} {...props}>
    {children}
    {isGradientBackground && (
      <Image
        src='/assets/mocks-image/wallet-background.svg'
        alt=''
        fill
        className='wave-background'
      />
    )}
  </BoxContainer>
);

export default Box;
