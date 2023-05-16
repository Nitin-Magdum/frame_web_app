import styled from "styled-components";
import * as React from "react";
import SimpleGrow from "./COntrollSwitches"
import HollowRectangle from "./HollowRectangle";

const ScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;
const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LeftSide = styled.div`
  width: 70%;
  background-color: #e0e0e0;
  height: 100%; /* Set height to 100% of parent container (ScreenContainer) */
`;

const RightSide = styled.div`
  width: 30%;
  background-color: #f5f5f5;
  height: 100%; /* Set height to 100% of parent container (ScreenContainer) */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  height: 100%; /* Set height to 100% of parent container (RightSide) */
`;

const RowOne = styled.div`
  background-color: #e0e0e0;
  border: 1px solid #ccc;
`;

const RowTwo = styled.div`
  background-color: #f5f5f5;
  border: 1px solid #ccc;
`;



function ExampleScreen() {
  return (
    <ScreenContainer>
      <LeftSide>
        <CenteredDiv>
          <HollowRectangle />
        </CenteredDiv>
      </LeftSide>
      <RightSide>
        <GridContainer>
          <RowOne>
            <SimpleGrow />  
          </RowOne>
          <RowTwo>Row 2 content here</RowTwo>
        </GridContainer>
      </RightSide>
    </ScreenContainer>
  );
}

export default ExampleScreen;
