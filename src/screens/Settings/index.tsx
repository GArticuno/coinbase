import { Accordion, Box, Card, Chip, Divider, Input, Layout, Typography } from 'components';
import Image from 'next/image';
import { BsCameraFill } from 'react-icons/bs';
import { useTheme } from 'styled-components';

import {
  AccordionContainer,
  CameraContainer,
  CardContainer,
  Container,
  ImageContainer,
  InputBox,
  ProfileImage,
} from './styles';

const Settings = () => {
  const theme = useTheme();
  return (
    <Layout page='settings'>
      <Typography fontWeight='bold'>Settings</Typography>
      <Container>
        <Card
          hasOptions={false}
          display='flex'
          flexDirection='column'
          gap={0}
          padding={0}
          paddingRight={0}
        >
          <CardContainer>
            <Accordion header={<Typography fontWeight='bold'>Profile</Typography>}>
              <AccordionContainer>
                <ImageContainer>
                  <ProfileImage>
                    <Image
                      src='/assets/mocks-image/user-settings.png'
                      alt='user'
                      width={114}
                      height={114}
                    />
                    <CameraContainer>
                      <BsCameraFill color={theme.colors.text.contrast} size={39} />
                    </CameraContainer>
                  </ProfileImage>

                  <Typography fontSize='s'>
                    * The uploaded image must be 500px wide and 500px long
                  </Typography>
                </ImageContainer>
                <InputBox>
                  <Typography fontSize='s'>Name</Typography>
                  <Input variant='secondary' placeholder='Ramon Ridwan' />
                </InputBox>
                <InputBox>
                  <Typography fontSize='s'>Email</Typography>
                  <Input variant='secondary' placeholder='Ramonridwan@gogeafrica.com' />
                </InputBox>
                <InputBox>
                  <Typography fontSize='s'>Phone</Typography>
                  <Input variant='secondary' placeholder='+234 813344969221' />
                </InputBox>
                <InputBox>
                  <Typography fontSize='s'>Nationality</Typography>
                  <Input variant='secondary' placeholder='Lagos, Nigeria' />
                </InputBox>
                <Chip variant='gradient.primary.head' paddingVertical={13} paddingHorizontal={30}>
                  <Typography variant='contrast' fontSize='s'>
                    Save changes
                  </Typography>
                </Chip>
              </AccordionContainer>
            </Accordion>
          </CardContainer>

          <Divider orientation='horizontal' />
          <CardContainer>
            <Accordion header={<Typography fontWeight='bold'>Password</Typography>}>
              <AccordionContainer>
                <InputBox>
                  <Typography fontSize='s'>Old password</Typography>
                  <Input variant='secondary' placeholder='Type here' type='password' />
                </InputBox>
                <InputBox>
                  <Typography fontSize='s'>New password</Typography>
                  <Input variant='secondary' placeholder='Type here' type='password' />
                </InputBox>
                <InputBox>
                  <Typography fontSize='s'>Repeat new password</Typography>
                  <Input variant='secondary' placeholder='Type here' type='password' />
                </InputBox>
                <Chip variant='gradient.primary.head' paddingVertical={13} paddingHorizontal={30}>
                  <Typography variant='contrast' fontSize='s'>
                    Save changes
                  </Typography>
                </Chip>
              </AccordionContainer>
            </Accordion>
          </CardContainer>

          <Divider orientation='horizontal' />

          <CardContainer>
            <Accordion header={<Typography fontWeight='bold'>Billing Information</Typography>}>
              <AccordionContainer>
                <Box maxWidth={308} padding={0} display='flex' alignItems='center'>
                  <Typography fontSize='s' textAlign='center'>
                    Fill in the bank information into which you would want your transaction return
                    and bonuses.
                  </Typography>
                </Box>
                <Image src='/assets/mocks-image/card.svg' alt='card' width={297} height={187} />
                <Chip variant='gradient.primary.head' paddingVertical={13} paddingHorizontal={30}>
                  <Typography variant='contrast' fontSize='s'>
                    Save changes
                  </Typography>
                </Chip>
              </AccordionContainer>
            </Accordion>
          </CardContainer>
        </Card>
      </Container>
    </Layout>
  );
};

export default Settings;
