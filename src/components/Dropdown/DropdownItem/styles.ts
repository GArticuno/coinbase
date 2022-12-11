import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Item = styled.div<{ index: number; length: number }>`
  display: flex;
  background: ${({ theme }) => theme.background.color.primary};
  min-width: 63px;
  text-align: left;
  cursor: pointer;
  &:hover {
    background: linear-gradient(
      ${({ theme }) => theme.gradient.default.head},
      ${({ theme }) => theme.gradient.default.tail}
    );
  }
  ${({ index, length }) => {
    if (index === 0) {
      return css`
        border: 1px solid ${({ theme }) => theme.background.border};
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
      `;
    }
    if (index === length - 1) {
      return css`
        border: 1px solid ${({ theme }) => theme.background.border};
        border-top: 0;
        border-radius: 0 0 10px 10px;
      `;
    }
    return css`
      border: 1px solid ${({ theme }) => theme.background.border};
      border-top: 0;
      border-bottom: 0;
    `;
  }}
  padding: 0.5rem 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.background.border};
`;
