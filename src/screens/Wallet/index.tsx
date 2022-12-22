import { Layout, Typography, WalletCard } from 'components';

import { Container } from './styles';

const Wallet = () => (
  <Layout page='wallet'>
    <Typography fontWeight='bold'>Wallet</Typography>
    <Container>
      <WalletCard />
    </Container>
  </Layout>
);

export default Wallet;
