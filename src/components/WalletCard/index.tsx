import Box from 'components/Box';
import Card from 'components/Card';
import Chip from 'components/Chip';
import TitleBox from 'components/TitleBox';
import Typography from 'components/Typography';
import Image from 'next/image';

import { Container } from './styles';

const WalletCard = () => (
  <Card
    isGradientBackground
    marginTop={32}
    flexDirection='column'
    alignItems='center'
    display='flex'
    justifyContent='center'
    position='relative'
    gap={16}
    padding={32}
    hasOptions={false}
  >
    <TitleBox>
      <Typography fontWeight='bold' variant='contrast'>
        Wallet
      </Typography>
      <Chip variant='text.contrast' paddingHorizontal={26} paddingVertical={13}>
        <Typography fontSize='s' variant='secondary'>
          Withdraw Funds
        </Typography>
      </Chip>
    </TitleBox>
    <Container>
      <Image src='/assets/mocks-image/trophy.svg' alt='trophy' width={178} height={178} />
      <Box display='flex' flexDirection='column' padding={20} maxWidth={265}>
        <Chip variant='text.secondary' maxWidth={115}>
          <Typography fontSize='s' variant='contrast'>
            Total Earning
          </Typography>
        </Chip>
        <Box display='flex' flexDirection='column' padding={20} gap={18} marginRight={36}>
          <Typography fontSize='xl' variant='contrast'>
            #120000.00
          </Typography>
          <Typography fontSize='s' variant='contrast'>
            Please note this’s the total sum of ya’ transaction here on{' '}
            <Typography fontSize='s' variant='contrast' fontWeight='bold'>
              GOGE AFRICA
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box display='flex' flexDirection='column' padding={20} maxWidth={265}>
        <Chip variant='text.secondary' maxWidth={115}>
          <Typography fontSize='s' variant='contrast'>
            Balance
          </Typography>
        </Chip>
        <Box display='flex' flexDirection='column' padding={20} gap={18} marginRight={36}>
          <Typography fontSize='xl' variant='contrast'>
            #30000.00
          </Typography>
          <Typography fontSize='s' variant='contrast'>
            Please note this the current balance amount left on ya’ wallet.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Card>
);

export default WalletCard;
