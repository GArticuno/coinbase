import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  width: 100%;
`;

export const Col = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ActionContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 2.5rem;
`;

export const DropdownButton = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
