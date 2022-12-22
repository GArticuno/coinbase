import { Layout, TransactionsCard, Typography } from 'components';

import { Container } from './styles';

const Transactions = () => (
  <Layout page='transactions'>
    <Typography fontWeight='bold'>Transactions</Typography>
    <Container>
      <TransactionsCard />
    </Container>
  </Layout>
);

export default Transactions;
