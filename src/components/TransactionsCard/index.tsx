import Card from 'components/Card';
import Table from 'components/Table';
import Typography from 'components/Typography';

import TransactionItem from './TransactionItem';
import { data, header } from './constants';
import { Container } from './styles';

const TransactionsCard = () => (
  <Card flexDirection='column' marginTop={32}>
    <Typography fontWeight='bold' variant='primary'>
      Transactions
    </Typography>
    <Container>
      <Table header={header} data={data} renderItem={(item) => <TransactionItem item={item} />} />
    </Container>
  </Card>
);

export default TransactionsCard;
