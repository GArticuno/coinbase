import styled from 'styled-components';

export const LayoutHeader = styled.div`
  background-color: #ffffff;
  border: 1px solid #f0f0f0;
  width: 100%;
  padding: 1rem 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  grid-template-columns: 1fr auto auto;
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

export const LayoutHeaderNotification = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LayoutDashboard = styled.div<{ height: number }>`
  background-color: ${({ theme }) => theme.colors.background.primary}
  border: 1px solid ${({ theme }) => theme.colors.border}
  border-top: 0;
  height: ${({ height }) => height}px;
  width: 290px;
  padding: 2.65rem 0rem;
  padding-right: 1rem;
`;

export const LayoutDashboardButton = styled.div<{ page: string; id: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  padding: 3rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  width: 100%;
`;
