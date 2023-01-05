import Image from 'next/image';
import useStore from 'store';

import { BoxContainer } from './styles';
import type { BoxProps } from './types';

const Box = ({ children, isGradientBackground, padding, ...props }: BoxProps) => {
  const { isDark } = useStore();
  return (
    <BoxContainer padding={padding} {...props}>
      {children}
      {isGradientBackground && !isDark && (
        <Image
          src='/assets/mocks-image/wallet-background.svg'
          alt=''
          fill
          className='wave-background'
        />
      )}
      {isGradientBackground && isDark && (
        <Image
          src='/assets/mocks-image/wallet-background-dark.svg'
          alt=''
          fill
          className='wave-background'
        />
      )}
    </BoxContainer>
  );
};

export default Box;
