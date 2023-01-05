import Box from 'components/Box';
import Notification from 'components/Notification';
import TitleBox from 'components/TitleBox';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiFillCaretUp } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';
import useStore from 'store';
import { useTheme } from 'styled-components';

import Input from '../Input';
import Typography from '../Typography';
import { menu } from './constants';
import {
  DropdownContainer,
  HeaderButton,
  LayoutContainer,
  LayoutContainerChildren,
  LayoutDashboard,
  LayoutDashboardButton,
  LayoutHeader,
  LayoutHeaderBox,
  LayoutHeaderNotification,
  LayoutHeaderProfile,
  RightButton,
} from './styles';
import type { LayoutProps } from './types';

const Layout = ({ children, page }: LayoutProps) => {
  const theme = useTheme();
  const { isDark, changeTheme } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const { push } = useRouter();

  const onSwitch = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <LayoutHeader>
        <Image
          src={isDark ? '/assets/logo-dark.svg' : '/assets/logo.svg'}
          alt='coinbase'
          width={107}
          height={25}
        />
        <LayoutHeaderBox>
          <Input
            variant='primary'
            placeholder='Search e.g card'
            iconLeft={<CiSearch color={theme.colors.text.primary} />}
          />
          <LayoutHeaderProfile>
            <Image src='/assets/mocks-image/user-icon.png' alt='user' width={36} height={36} />
            <Typography fontSize='s'>Ramon Ridwan</Typography>
          </LayoutHeaderProfile>
          <LayoutHeaderNotification>
            <HeaderButton onClick={onSwitch}>
              <IoMdNotificationsOutline size={24} color={theme.colors.text.primary} />
            </HeaderButton>
            <DropdownContainer isOpen={isOpen}>
              <Notification />
            </DropdownContainer>
          </LayoutHeaderNotification>
          <HeaderButton onClick={changeTheme}>
            {isDark ? (
              <MdOutlineLightMode size={24} color={theme.colors.text.primary} />
            ) : (
              <MdOutlineModeNight size={24} color={theme.colors.text.primary} />
            )}
          </HeaderButton>
        </LayoutHeaderBox>
      </LayoutHeader>
      <LayoutContainer>
        <LayoutDashboard height={typeof window !== 'undefined' ? window.innerHeight : 900}>
          {menu.map((item) => (
            <LayoutDashboardButton
              page={page}
              id={item.id}
              key={item.id}
              onClick={() => push(item.id)}
            >
              <Image
                src={page === item.id || isDark ? item.image.selected : item.image.default}
                alt={item.id}
                width={item.image.width}
                height={item.image.height}
              />
              <Typography fontSize='s' variant={page === item.id ? 'contrast' : 'primary'}>
                {item.name}
              </Typography>
            </LayoutDashboardButton>
          ))}

          <Box marginTop={84}>
            <LayoutDashboardButton page={page} id='referral' onClick={() => push('referral')}>
              <Box display='flex' justifyContent='center'>
                <Typography
                  fontSize='s'
                  variant={page === 'referral' ? 'contrast' : 'primary'}
                  textAlign='center'
                >
                  Referral
                </Typography>
              </Box>
            </LayoutDashboardButton>

            <LayoutDashboardButton page={page} id='logout' onClick={() => push('logout')}>
              <Box display='flex' justifyContent='center'>
                <Typography fontSize='s' variant={page === 'logout' ? 'contrast' : 'primary'}>
                  Logout
                </Typography>
              </Box>
            </LayoutDashboardButton>
          </Box>
        </LayoutDashboard>
        <LayoutContainerChildren>
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
          {children}
        </LayoutContainerChildren>
      </LayoutContainer>
    </>
  );
};

export default Layout;
