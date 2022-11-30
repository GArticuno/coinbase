import { Card, Layout, Typography } from 'components';
import Image from 'next/image';
import { AiFillCaretUp } from 'react-icons/ai';

import { FlexBox, GraphDesc, Grid, PercentText, RightButton, TitleBox } from './styles';

const Overview = () => (
  <Layout page='overview'>
    <TitleBox>
      <Typography fontWeight='bold' fontSize='s'>
        User Management System Overview
      </Typography>
      <RightButton>
        <Typography fontWeight='bold' fontSize='s'>
          Accounts | RAMON RIDWAN
        </Typography>
        <AiFillCaretUp color='#858585' size={9} />
      </RightButton>
    </TitleBox>
    <TitleBox>
      <Typography fontWeight='bold'>Overview</Typography>
      <RightButton>
        <Image src='/assets/icons/calendar.svg' alt='calendar' width={18.25} height={19.16} />
      </RightButton>
    </TitleBox>
    <Grid>
      <Card>
        <Image src='/assets/mocks-image/graph-pink.svg' alt='graph-pink' width={115} height={124} />
        <GraphDesc>
          <Typography fontWeight='bold'>Total Number Of Transaction</Typography>
          <FlexBox>
            <PercentText>
              <Typography fontSize='s' variant='tertiary'>
                22.18%
              </Typography>
              <AiFillCaretUp color='#1cd1a1' size={7} />
            </PercentText>
            <Image
              src='/assets/mocks-image/graph-green.svg'
              alt='graph-green'
              width={63}
              height={26}
            />
          </FlexBox>
        </GraphDesc>
      </Card>
      <Card>
        <Image src='/assets/mocks-image/graph-pink.svg' alt='graph-pink' width={115} height={124} />
        <GraphDesc>
          <Typography fontWeight='bold'>Total Number Of Transaction</Typography>
          <FlexBox>
            <PercentText>
              <Typography fontSize='s' variant='tertiary'>
                22.18%
              </Typography>
              <AiFillCaretUp color='#1cd1a1' size={7} />
            </PercentText>
            <Image
              src='/assets/mocks-image/graph-green.svg'
              alt='graph-green'
              width={63}
              height={26}
            />
          </FlexBox>
        </GraphDesc>
      </Card>
      <Card>
        <Image src='/assets/mocks-image/graph-pink.svg' alt='graph-pink' width={115} height={124} />
        <GraphDesc>
          <Typography fontWeight='bold'>Total Number Of Transaction</Typography>
          <FlexBox>
            <PercentText>
              <Typography fontSize='s' variant='tertiary'>
                22.18%
              </Typography>
              <AiFillCaretUp color='#1cd1a1' size={7} />
            </PercentText>
            <Image
              src='/assets/mocks-image/graph-green.svg'
              alt='graph-green'
              width={63}
              height={26}
            />
          </FlexBox>
        </GraphDesc>
      </Card>
    </Grid>
  </Layout>
);

export default Overview;
