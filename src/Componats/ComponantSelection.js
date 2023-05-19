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
} from "./ComponantSelectionStyles";
import SimpleGrow from "./COntrollSwitches";
import HollowRectangle from "./HollowRectangle";


function ComponantSelection() {
  function hexToRgb(hex) {
    hex = hex.replace("#", "");

    const red = parseInt(hex.substring(0, 2), 16);
    const green = parseInt(hex.substring(2, 4), 16);
    const blue = parseInt(hex.substring(4, 6), 16);

    return {
      r: red,
      g: green,
      b: blue,
    };
  }

  const [topShadowColor, setTopShadowColor] = useState(hexToRgb("#f50057"));
  const [rightShadowColor, setRightShadowColor] = useState(hexToRgb("#08d5d9"));
  const [bottomShadowColor, setBottomShadowColor] = useState(hexToRgb("#f50057"));
  const [leftShadowColor, setLeftShadowColor] = useState(hexToRgb("#f50057"));
  const [innerTopShadowColor, setInnerTopShadowColor] = useState(hexToRgb("#08d5d9"));
  const [innerRightShadowColor, setInnerRightShadowColor] = useState(hexToRgb("#512da8"));
  const [innerBottomShadowColor, setInnerBottomShadowColor] = useState(hexToRgb("#2196f3"));
  const [innerLeftShadowColor, setInnerLeftShadowColor] = useState(hexToRgb("#f50057"));

  // console.log(hexToRgb(topShadowColor));


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
          <RowTwo>Row 2 content here{ColourSelectionButtons}</RowTwo>
        </GridContainer>
      </RightSide>
    </ScreenContainer>
  );
}

export default ComponantSelection;
