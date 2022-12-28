import Box from 'components/Box';
import styled, { css } from 'styled-components';

export const ProfileBox = styled(Box)`
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    opacity: 0.5;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;
`;

export const Bubble = styled.div<{ status: number }>`
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  bottom: 0;
  right: 0;
  ${({ theme, status }) => {
    switch (status) {
      case 0:
        return css`
          background: ${theme.colors.border};
        `;
      case 1:
        return css`
          background: ${theme.colors.text.success};
        `;
      default:
        return css`
          background: ${theme.colors.text.error};
        `;
    }
  }};
`;
