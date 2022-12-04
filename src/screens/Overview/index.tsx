import { Card, Layout, Typography } from 'components';
import PercentBar from 'components/PercentBar';
import Image from 'next/image';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';

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
        <PercentBar percent={70} text='15000' />
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
        <PercentBar percent={50} text='43498' />
        <GraphDesc>
          <Typography fontWeight='bold'>Total Number Of Trade</Typography>
          <FlexBox>
            <PercentText>
              <Typography fontSize='s' variant='tertiary'>
                11.8%
              </Typography>
              <AiFillCaretDown color='#1cd1a1' size={7} />
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
        <PercentBar percent={87} text='87%' />
        <GraphDesc>
          <Typography fontWeight='bold'>Market Rate Value</Typography>
          <FlexBox>
            <PercentText>
              <Typography fontSize='s' variant='tertiary'>
                11.8%
              </Typography>
              <AiFillCaretDown color='#1cd1a1' size={7} />
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
