import React, { useState } from "react";
import {
  ScreenContainer,
  CenteredDiv,
  LeftSide,
  RightSide,
  GridContainer,
  RowOne,
  RowTwo,
} from "../Styles";
import HollowRectangle from "../LightColours/HollowRectangle";
import AppBar from "./AppBar";
import LevelIndicator from "./LevelIndicator";

export default function ComponantSelection() {
  const [colourvalues, setColourvalues] = useState({
    topShadowColor: "#000000",
    rightShadowColor: "#000000",
    bottomShadowColor: "#000000",
    leftShadowColor: "#000000",
  });

  console.log("colourvalues", colourvalues);

  return (
    <>
      <AppBar setColourvalues={setColourvalues} />
      <ScreenContainer>
        <LeftSide>
          <CenteredDiv
            style={{
              marginLeft: "-190px",
            }}
          >
            <HollowRectangle {...colourvalues} />
          </CenteredDiv>
        </LeftSide>
        <RightSide>
          <GridContainer>
            <RowOne></RowOne>
            <RowTwo>
              <LevelIndicator />
            </RowTwo>
          </GridContainer>
        </RightSide>
      </ScreenContainer>
    </>
  );
}
