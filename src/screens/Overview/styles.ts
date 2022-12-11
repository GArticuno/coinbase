import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
`;

export const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const RightButton = styled.div`
  text-align: end;
  align-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.3rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2.6rem;
  width: 100%;
`;

export const GraphDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const PercentText = styled(FlexBox)`
  justify-content: center;
  gap: 0.2rem;
`;

export const ConversionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  width: 100%;
  margin-top: 1.5rem;
`;

export const CardDesc = styled(TitleBox)``;

export const CardList = styled(GraphDesc)`
  width: 100%;
`;
