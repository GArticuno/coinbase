import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.div<{ index: number; length: number }>`
  display: flex;
  background: ${({ theme }) => theme.colors.background.primary};
  min-width: 63px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      ${({ theme }) => theme.colors.gradient.primary.head},
      ${({ theme }) => theme.colors.gradient.primary.tail}
    );
  }
  ${({ index, length }) => {
    if (index === 0) {
      return css`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
      `;
    }
    if (index === length - 1) {
      return css`
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-top: 0;
        border-radius: 0 0 10px 10px;
      `;
    }
    return css`
      border: 1px solid ${({ theme }) => theme.colors.border};
      border-top: 0;
      border-bottom: 0;
    `;
  }}
  padding: 0.5rem 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
`;
