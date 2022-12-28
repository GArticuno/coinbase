import {
  Card,
  Icon,
  Layout,
  PercentBar,
  StatisticsCard,
  TitleBox,
  TransactionsCard,
  Typography,
  WalletCard,
} from 'components';
import Image from 'next/image';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { useTheme } from 'styled-components';

import { cards } from './constants';
import { CardList, ConversionContainer, FlexBox, GraphDesc, Grid, PercentText } from './styles';

const Overview = () => {
  const theme = useTheme();
  return (
    <Layout page='overview'>
      <TitleBox>
        <Typography fontWeight='bold'>Overview</Typography>
        <Image src='/assets/icons/calendar.svg' alt='calendar' width={18.25} height={19.16} />
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
                <AiFillCaretUp color={theme.colors.text.tertiary} size={7} />
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
                <AiFillCaretDown color={theme.colors.text.tertiary} size={7} />
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
                <AiFillCaretDown color={theme.colors.text.tertiary} size={7} />
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
      <Card
        flexDirection='column'
        alignItems='flex-start'
        marginTop={32}
        paddingLeft={48}
        paddingTop={36}
      >
        <Typography fontWeight='bold'>Conversion Rate to Naira</Typography>
        <ConversionContainer>
          <Grid>
            {cards.map((item) => (
              <CardList key={item.card_title}>
                <Typography variant='secondary' fontSize='s' fontWeight='bold'>
                  {item.card_title}
                </Typography>
                {item.transactions.map((transaction) => (
                  <TitleBox key={transaction.name}>
                    <Typography fontSize='s'>{transaction.name}</Typography>
                    <Typography fontSize='s'>{transaction.value}</Typography>
                  </TitleBox>
                ))}
              </CardList>
            ))}
          </Grid>
          <Icon size={44} variant='default' onClick={() => console.log('clicked')}>
            <BiRightArrowAlt size={24} color={theme.colors.background.primary} />
          </Icon>
        </ConversionContainer>
      </Card>
      <WalletCard />
      <StatisticsCard isOverview />
      <TransactionsCard isOverview />
    </Layout>
  );
};

export default Overview;
