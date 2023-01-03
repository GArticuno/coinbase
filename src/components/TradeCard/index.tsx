import Box from 'components/Box';
import Chip from 'components/Chip';
import Divider from 'components/Divider';
import Input from 'components/Input';
import Typography from 'components/Typography';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { useTheme } from 'styled-components';

import Profile from './Profile';
import { traders } from './constants';
import { BoxSend, DividerGradient, Message, MessageBox, MessageSend } from './styles';

const TradeCard = () => {
  const theme = useTheme();
  return (
    <Box
      display='flex'
      flexDirection='row'
      marginTop={32}
      hasBorder
      background='primary'
      minHeight={686}
    >
      <Box display='flex' flexDirection='row'>
        <Box maxWidth={262} position='relative'>
          <Profile name='Ramon Ridwan' status={1} image='/assets/mocks-image/user-icon.png' />
          <Divider orientation='horizontal' />
          {traders.map((item) => (
            <Profile {...item} />
          ))}
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            position='absolute'
            bottom={0}
            padding={20}
          >
            <Chip
              variant='gradient.primary.head'
              paddingHorizontal={24}
              paddingVertical={12}
              width={134}
            >
              <Typography fontSize='s' variant='contrast'>
                New Trade?
              </Typography>
            </Chip>
          </Box>
        </Box>
        <Divider orientation='vertical' />
        <Box position='relative'>
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            position='absolute'
            bottom={0}
            padding={20}
          >
            <Box
              display='flex'
              flexDirection='column'
              padding={20}
              alignItems='end'
              justifyContent='center'
            >
              <MessageBox>
                <Message>
                  <Typography fontSize='s'>
                    Hello am new to this system can i get a breakdown on how it works?
                  </Typography>
                  <MessageSend>
                    <Typography fontSize='xs'>10:22</Typography>
                  </MessageSend>
                </Message>
              </MessageBox>
              <MessageBox isUser>
                <Message>
                  <Typography fontSize='s'>
                    Yes we currently run both on our platform here
                  </Typography>
                  <MessageSend>
                    <Typography fontSize='xs'>10:22</Typography>
                  </MessageSend>
                </Message>
              </MessageBox>
              <Box display='flex' padding={20} flexDirection='row' alignItems='center' gap={16}>
                <Typography fontSize='s' fontWeight='bold' variant='quartenary'>
                  UNREAD
                </Typography>
                <DividerGradient />
              </Box>
              <MessageBox>
                <Message>
                  <Typography fontSize='s'>
                    Please, can you go into details bout the service
                  </Typography>
                  <MessageSend>
                    <Typography fontSize='xs'>10:25</Typography>
                  </MessageSend>
                </Message>
              </MessageBox>
            </Box>
            <Input
              variant='secondary'
              placeholder='Start typing here'
              iconRight={
                <BoxSend>
                  <AiOutlinePaperClip size={24} color={theme.colors.text.primary} />
                  <Chip
                    variant='gradient.primary.head'
                    paddingHorizontal={16}
                    paddingVertical={8}
                    width={73}
                    onClick={() => console.log('clicked')}
                  >
                    <Typography fontSize='s' variant='contrast' fontWeight='bold'>
                      SEND
                    </Typography>
                  </Chip>
                </BoxSend>
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TradeCard;
