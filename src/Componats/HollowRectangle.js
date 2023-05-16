import React, { useState } from "react";
import styled from "styled-components";

const Rectangle = styled.div`
  width: 600px;
  height: 400px;
  border: 10px solid #000;
  box-shadow: ${(props) => props.topShadowColor} 0 0 10px,
    ${(props) => props.rightShadowColor} 20px 0 20px,
    ${(props) => props.bottomShadowColor} 0 0 30px,
    ${(props) => props.leftShadowColor} -20px 0 40px;
  border-radius: 20px;
`;

export default function HollowRectangle() {
  const [topShadowColor, setTopShadowColor] = useState("#f50057");
  const [rightShadowColor, setRightShadowColor] = useState("#08d5d9");
  const [bottomShadowColor, setBottomShadowColor] = useState("#f50057");
  const [leftShadowColor, setLeftShadowColor] = useState("#f50057");

  return (
    <div>
      <Rectangle
        topShadowColor={topShadowColor}
        rightShadowColor={rightShadowColor}
        bottomShadowColor={bottomShadowColor}
        leftShadowColor={leftShadowColor}
      />
      <div>
        <label>Top Shadow Color:</label>
        <input
          type="color"
          value={topShadowColor}
          onChange={(e) => setTopShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Right Shadow Color:</label>
        <input
          type="color"
          value={rightShadowColor}
          onChange={(e) => setRightShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Bottom Shadow Color:</label>
        <input
          type="color"
          value={bottomShadowColor}
          onChange={(e) => setBottomShadowColor(e.target.value)}
        />
      </div>
      <div>
        <label>Left Shadow Color:</label>
        <input
          type="color"
          value={leftShadowColor}
          onChange={(e) => setLeftShadowColor(e.target.value)}
        />
      </div>
    </div>
  );
}
