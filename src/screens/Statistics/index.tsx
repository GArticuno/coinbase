import { Layout, StatisticsCard, TitleBox, Typography } from 'components';
import Image from 'next/image';

import { Container } from './styles';

const Statistics = () => (
  <Layout page='statistics'>
    <TitleBox>
      <Typography fontWeight='bold'>Statistics</Typography>
      <Image src='/assets/icons/calendar.svg' alt='calendar' width={18.25} height={19.16} />
    </TitleBox>
    <Container>
      <StatisticsCard />
    </Container>
  </Layout>
);

export default Statistics;
