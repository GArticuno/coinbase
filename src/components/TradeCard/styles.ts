import styled from 'styled-components';

export const BoxSend = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16;
`;

export const MessageBox = styled.div<{ isUser?: boolean }>`
  display: flex;
  width: 100%;
  margin: 1.2rem 0;
  justify-content: ${({ isUser }) => (isUser ? 'end' : 'start')};
`;

export const Message = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: start;
  padding: 1.2rem 1rem;

  background: ${({ theme }) => theme.colors.background.tertiary};
  border-radius: 10px;
  max-width: 443px;
`;

export const MessageSend = styled.div`
  position: absolute;
  bottom: 0px;
  right: 15px;
`;

export const DividerGradient = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.gradient.primary.head},${theme.colors.gradient.primary.tail})`};
`;
