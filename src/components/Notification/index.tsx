import Box from 'components/Box';
import Chip from 'components/Chip';
import Typography from 'components/Typography';

import {
  Dot,
  DotLine,
  NotificationContainer,
  NotificationMessage,
  NotificationSended,
  NotificationText,
} from './styles';

const Notification = () => (
  <Box
    display='flex'
    flexDirection='column'
    alignItems='center'
    justifyContent='center'
    hasBorder
    background='primary'
    padding={25}
    gap={24}
  >
    <NotificationContainer>
      <DotLine />
      <NotificationMessage>
        <Dot color='success' />
        <NotificationText>
          <Typography fontSize='s' fontWeight='bold'>
            Agent Rose
          </Typography>
          <Typography fontSize='s'>
            Message: Please, kindly do take a snap-shot of the card.
          </Typography>
        </NotificationText>
        <NotificationSended>
          <Typography variant='error' fontSize='s'>
            18min.
          </Typography>
        </NotificationSended>
      </NotificationMessage>
      <NotificationMessage>
        <Dot color='success' />
        <NotificationText>
          <Typography fontSize='s' fontWeight='bold'>
            GOGE Team
          </Typography>
          <Typography fontSize='s'>Alert: New card added this week check em out.</Typography>
        </NotificationText>
        <NotificationSended>
          <Typography variant='error' fontSize='s'>
            34min.
          </Typography>
        </NotificationSended>
      </NotificationMessage>
      <NotificationMessage>
        <Dot color='error' />
        <NotificationText>
          <Typography fontSize='s' fontWeight='bold'>
            Halloween Promo
          </Typography>
          <Typography fontSize='s'>
            Promotion: Get 13% the price when you exchange bitcoin to cash.
          </Typography>
        </NotificationText>
        <NotificationSended>
          <Typography variant='error' fontSize='s'>
            1hour
          </Typography>
        </NotificationSended>
      </NotificationMessage>
      <NotificationMessage>
        <Dot color='warn' />
        <NotificationText>
          <Typography fontSize='s' fontWeight='bold'>
            GOGE Team
          </Typography>
          <Typography fontSize='s'>
            Alert: Sorry to see you go. You just unsubscribe from the newsletter.
          </Typography>
        </NotificationText>
        <NotificationSended>
          <Typography variant='error' fontSize='s'>
            2hour
          </Typography>
        </NotificationSended>
      </NotificationMessage>
    </NotificationContainer>
    <Chip
      variant='gradient.primary.head'
      paddingHorizontal={24}
      paddingVertical={12}
      onClick={() => console.log('clicked')}
    >
      <Typography fontSize='s' variant='contrast'>
        View more
      </Typography>
    </Chip>
  </Box>
);

export default Notification;
