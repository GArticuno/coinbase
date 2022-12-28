import Box from 'components/Box';
import Typography from 'components/Typography';
import Image from 'next/image';
import { formatProfileStatus } from 'utils/profileStatus';

import { Bubble, ImageContainer, ProfileBox } from './styles';
import { ProfileProps } from './types';

const Profile = ({ name, image, status }: ProfileProps) => (
  <ProfileBox display='flex' flexDirection='row' alignItems='center' justifyContent='center'>
    <ImageContainer>
      <Image src={image} alt='user' width={36} height={36} />
      <Bubble status={status} />
    </ImageContainer>

    <Box display='flex' flexDirection='column' padding={0} paddingLeft={16}>
      <Typography fontSize='s' fontWeight='bold'>
        {name}
      </Typography>
      <Typography fontSize='s'>{formatProfileStatus(status)}</Typography>
    </Box>
  </ProfileBox>
);

export default Profile;
