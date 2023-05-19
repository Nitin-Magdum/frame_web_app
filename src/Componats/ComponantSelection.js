import React, { useState } from "react";
import {
  ScreenContainer,
  CenteredDiv,
  LeftSide,
  RightSide,
  GridContainer,
  RowOne,
  RowTwo,
  Input,
} from "./Styles";
import SimpleGrow from "./COntrollSwitches";
import HollowRectangle from "./HollowRectangle";


export default function ComponantSelection() {
  const [topShadowColor, setTopShadowColor] = useState("#f50057");
  const [rightShadowColor, setRightShadowColor] = useState("#08d5d9");
  const [bottomShadowColor, setBottomShadowColor] = useState("#f50057");
  const [leftShadowColor, setLeftShadowColor] = useState("#f50057");
  const [innerTopShadowColor, setInnerTopShadowColor] = useState("#08d5d9");
  const [innerRightShadowColor, setInnerRightShadowColor] = useState("#512da8");
  const [innerBottomShadowColor, setInnerBottomShadowColor] =
    useState("#2196f3");
  const [innerLeftShadowColor, setInnerLeftShadowColor] = useState("#f50057");

  const allStateValues = {
    topShadowColor,
    rightShadowColor,
    bottomShadowColor,
    leftShadowColor,
    innerTopShadowColor,
    innerRightShadowColor,
    innerBottomShadowColor,
    innerLeftShadowColor,
  };

  console.log(allStateValues);

  const ColourSelectionButtons = (
    <div>
      <div>
        <label>Top Shadow Color:</label>
        <Input
          type="color"
          value={topShadowColor}
          onChange={(e) => setTopShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Right Shadow Color:</label>
        <Input
          type="color"
          value={rightShadowColor}
          onChange={(e) => setRightShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Bottom Shadow Color:</label>
        <Input
          type="color"
          value={bottomShadowColor}
          onChange={(e) => setBottomShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Left Shadow Color:</label>
        <Input
          type="color"
          value={leftShadowColor}
          onChange={(e) => setLeftShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Inner Top Shadow Color:</label>
        <Input
          type="color"
          value={innerTopShadowColor}
          onChange={(e) => setInnerTopShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Inner Right Shadow Color:</label>
        <Input
          type="color"
          value={innerRightShadowColor}
          onChange={(e) => setInnerRightShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Inner Bottom Shadow Color:</label>
        <Input
          type="color"
          value={innerBottomShadowColor}
          onChange={(e) => setInnerBottomShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Inner Left Shadow Color:</label>
        <Input
          type="color"
          value={innerLeftShadowColor}
          onChange={(e) => setInnerLeftShadowColor(e.target.value)}
        />
      </div>
    </div>
  );

  return (
    <ScreenContainer>
      {/* <BackgroundVideo src={Video} autoPlay loop muted /> */}
      <LeftSide>
        <CenteredDiv>
          <HollowRectangle {...allStateValues} />
        </CenteredDiv>
      </LeftSide>
      <RightSide>
        <GridContainer>
          <RowOne>
            <SimpleGrow />
          </RowOne>
          <RowTwo>Row 2 content here{ColourSelectionButtons}</RowTwo>
        </GridContainer>
      </RightSide>
    </ScreenContainer>
  );
}
