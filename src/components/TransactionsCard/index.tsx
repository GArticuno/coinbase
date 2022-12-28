import Card from 'components/Card';
import Chip from 'components/Chip';
import Table from 'components/Table';
import Typography from 'components/Typography';

import TransactionItem from './TransactionItem';
import { data, header } from './constants';
import { Container } from './styles';
import { OverviewProps } from './types';

const TransactionsCard = ({ isOverview }: OverviewProps) => (
  <Card flexDirection='column' marginTop={32}>
    {isOverview && (
      <Typography fontWeight='bold' variant='primary'>
        Transactions
      </Typography>
    )}
    <Container>
      <Table header={header} data={data} renderItem={(item) => <TransactionItem item={item} />} />
    </Container>
    <Chip variant='gradient.primary.head' onClick={() => console.log('clicked')}>
      <Typography fontSize='s' variant='contrast'>
        View More
      </Typography>
    </Chip>
  </Card>
);

export default TransactionsCard;
