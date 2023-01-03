import { Box, Card, Chip, Input, Layout, Typography } from 'components';

import { Container, InputBox } from './styles';

const Logout = () => (
  <Layout page='logout'>
    <Typography fontWeight='bold'>Logout</Typography>
    <Container>
      <Card
        hasOptions={false}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        paddingTop={64}
        paddingBottom={64}
      >
        <Box display='flex' alignItems='center' justifyContent='center' marginBottom={40}>
          <Typography fontWeight='bold'>You’re bout to logout of the system</Typography>
        </Box>
        <InputBox>
          <Typography fontSize='s'>Email</Typography>
          <Input variant='secondary' placeholder='Email' />
        </InputBox>
        <InputBox>
          <Typography fontSize='s'>Password</Typography>
          <Input variant='secondary' placeholder='Type here' type='password' />
        </InputBox>
        <Chip variant='gradient.primary.head' paddingVertical={13} paddingHorizontal={30}>
          <Typography variant='contrast' fontSize='s'>
            Logout
          </Typography>
        </Chip>
      </Card>
    </Container>
  </Layout>
);

export default Logout;
