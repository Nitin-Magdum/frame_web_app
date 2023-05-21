import React, { useState } from "react";
import {
  ScreenContainer,
  CenteredDiv,
  LeftSide,
  RightSide,
  GridContainer,
} from "./Styles";
import SimpleGrow from "./ControllSwitches";
import HollowRectangle from "./HollowRectangle";



export default function ComponantSelection() {
  const [colourvalues, setColourvalues] = useState({
    topShadowColor: "#000000",
    rightShadowColor: "#000000",
    bottomShadowColor: "#000000",
    leftShadowColor: "#000000",
  });
  console.log("colourvalues", colourvalues);

  return (
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
          <SimpleGrow setColourvalues={setColourvalues} />
        </GridContainer>
      </RightSide>
    </ScreenContainer>
  );
}
