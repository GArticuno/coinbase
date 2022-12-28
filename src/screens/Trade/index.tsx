import { Layout, TradeCard, Typography } from 'components';

import { Container } from './styles';

const Trade = () => (
  <Layout page='trade'>
    <Typography fontWeight='bold'>Trade</Typography>
    <Container>
      <TradeCard />
    </Container>
  </Layout>
);

export default Trade;
