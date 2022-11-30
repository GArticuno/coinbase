import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';

import Input from '../Input';
import Typography from '../Typography';
import { menu } from './constants';
import {
  LayoutContainer,
  LayoutContainerChildren,
  LayoutDashboard,
  LayoutDashboardButton,
  LayoutHeader,
  LayoutHeaderBox,
  LayoutHeaderNotification,
  LayoutHeaderProfile,
} from './styles';
import type { LayoutProps } from './types';

const Layout = ({ children, page }: LayoutProps) => (
  <>
    <LayoutHeader>
      <Image src='/assets/logo.svg' alt='coinbase' width={107} height={25} />
      <LayoutHeaderBox>
        <Input variant='primary' placeholder='Search e.g card' iconLeft={<CiSearch />} />
        <LayoutHeaderProfile>
          <Image src='/assets/mocks-image/user-icon.png' alt='user' width={36} height={36} />
          <Typography fontSize='s'>Ramon Ridwan</Typography>
        </LayoutHeaderProfile>
        <LayoutHeaderNotification>
          <IoMdNotificationsOutline size={20} />
        </LayoutHeaderNotification>
      </LayoutHeaderBox>
    </LayoutHeader>
    <LayoutContainer>
      <LayoutDashboard height={typeof window !== 'undefined' ? window.innerHeight : 900}>
        {menu.map((item) => (
          <LayoutDashboardButton page={page} id={item.id}>
            <Image
              src={page === item.id ? item.image.selected : item.image.default}
              alt={item.id}
              width={item.image.width}
              height={item.image.height}
            />
            <Typography fontSize='s' variant={page === item.id ? 'white' : 'primary'}>
              {item.name}
            </Typography>
          </LayoutDashboardButton>
        ))}
      </LayoutDashboard>
      <LayoutContainerChildren>{children}</LayoutContainerChildren>
    </LayoutContainer>
  </>
);

export default Layout;
