import React, { useState, useContext } from "react";
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
import { ColorContext } from "../../Context/ColourContext/ColorContext";

export default function ComponantSelection() {
  const colorContext = useContext(ColorContext);
  const { top, right, bottom, left } = colorContext;

  const [colourvalues, setColourvalues] = useState({
    topShadowColor: top,
    rightShadowColor: right,
    bottomShadowColor: bottom,
    leftShadowColor: left,
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
