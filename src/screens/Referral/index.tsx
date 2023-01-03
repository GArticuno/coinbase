import { Card, Layout, Typography } from 'components';

import { Container } from './styles';

const Referral = () => (
  <Layout page='referral'>
    <Typography fontWeight='bold'>Referral</Typography>
    <Container>
      <Card
        hasOptions={false}
        display='flex'
        flexDirection='column'
        alignItems='start'
        justifyContent='start'
        padding={32}
        paddingLeft={64}
        gap={28}
      >
        <Typography fontWeight='bold'>Affiliate</Typography>
        <Typography>Get referal bonuses by sharing your referal link with friends</Typography>
        <Typography fontSize='s'>https://gogeafrica.com/register/ramonridwan</Typography>
      </Card>
    </Container>
  </Layout>
);

export default Referral;
