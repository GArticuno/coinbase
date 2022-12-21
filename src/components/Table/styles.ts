import styled from 'styled-components';

import { HeaderTableProps } from './types';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div<{ length: number }>`
  display: grid;
  grid-template-columns: repeat(${({ length }) => length}, 1fr);
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.5rem 1rem 0 1rem;
  justify-content: center;
  align-items: center;
`;

export const HeaderCell = styled.div<HeaderTableProps>`
  flex: ${({ flex }) => flex};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataContainer = styled(Container)`
  gap: 1rem;
`;

export const DataCell = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5rem 1rem;
  border-radius: 100px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  justify-content: center;
  align-items: center;
`;
