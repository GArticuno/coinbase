import styled, { TextVariantProps } from 'styled-components';

export const NotificationContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const DotLine = styled.div`
  width: 2px;
  height: 100%;
  position: absolute;
  background: ${({ theme }) => theme.colors.border};
  left: 7px;
  top: 0;
`;

export const NotificationMessage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  gap: 1.2rem;
`;

export const Dot = styled.div<{ color: keyof TextVariantProps }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border: 3px solid ${({ theme, color }) => theme.colors.text[color]};
  width: 15px;
  height: 15px;
  border-radius: 100%;
  z-index: 1;
`;

export const NotificationText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: left;
  align-items: start;
  min-width: 189px;
`;

export const NotificationSended = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.text.error}40;
  border-radius: 10px;
  padding: 2px 8px;
  height: 20px;
  width: 100%;
`;
