import styled from 'styled-components';

export const LayoutHeader = styled.div`
  background-color: ${({ theme }) => theme.colors.background.primary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-left: 0;
  border-top: 0;
  border-right: 0;
  width: 100%;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

export const RightButton = styled.div`
  text-align: end;
  align-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

export const LayoutHeaderBox = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto auto;
  gap: 3.5rem;
  align-items: center;
`;

export const LayoutHeaderProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 0.3rem;
  cursor: pointer;
`;

export const HeaderButton = styled.div`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const DropdownContainer = styled.div<{ isOpen: boolean }>`
  position: absolute;
  margin-top: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  z-index: 2;
  top: 1.5rem;
  right: 0;
`;

export const LayoutHeaderNotification = styled.div`
  position: relative;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LayoutDashboard = styled.div<{ height: number }>`
  background-color: ${({ theme }) => theme.colors.background.primary};
  height: ${({ height }) => height}px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  width: 250px;
  padding: 2.65rem 0rem;
  padding-top: 102px;
  padding-right: 1rem;
  position: fixed;
  z-index: 2;
`;

export const LayoutDashboardButton = styled.div<{ page: string; id: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 200px;
  gap: 1.2rem;
  padding: 1rem 3.475rem;
  background: ${({ page, id, theme }) =>
    page === id
      ? `linear-gradient(${theme.colors.gradient.primary.head}, ${theme.colors.gradient.primary.tail})`
      : theme.colors.background.primary};
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const LayoutContainerChildren = styled.div`
  padding: 3rem 3rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;
  padding-top: 110px;
  padding-left: 300px;
`;
