import { Calendar, Layout, StatisticsCard, TitleBox, Typography } from 'components';

import { Container } from './styles';

const Statistics = () => (
  <Layout page='statistics'>
    <TitleBox>
      <Typography fontWeight='bold'>Statistics</Typography>
      <Calendar />
    </TitleBox>
    <Container>
      <StatisticsCard />
    </Container>
  </Layout>
);

export default Statistics;
