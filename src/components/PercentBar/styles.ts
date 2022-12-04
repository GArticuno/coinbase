import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ImageBackground = styled.div`
  position: absolute;
  align-self: right;
  margin-left: 20px;
`;

export const TextContainer = styled.div<{ size: number }>`
  position: absolute;
  border-radius: 50%;
  width: ${({ size }) => size - 20}px;
  height: ${({ size }) => size - 20}px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
