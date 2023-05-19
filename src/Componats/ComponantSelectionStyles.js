import styled from "styled-components";


export const ScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LeftSide = styled.div`
  width: 70%;
  background-color: #e0e0e0;
  height: 100%; /* Set height to 100% of parent container (ScreenContainer) */
`;

export const RightSide = styled.div`
  width: 30%;
  background-color: #f5f5f5;
  height: 100%; /* Set height to 100% of parent container (ScreenContainer) */
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  height: 100%; /* Set height to 100% of parent container (RightSide) */
`;

export const RowOne = styled.div`
  background-color: #e0e0e0;
  border: 1px solid #ccc;
`;

export const RowTwo = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
`;

export const Input = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;