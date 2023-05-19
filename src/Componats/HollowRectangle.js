import React, { useState } from "react";
import styled from "styled-components";


const Container = styled.div`
  position: relative;
`;

const Rectangle = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #000;
  box-shadow: ${(props) => props.topShadowColor} 0 0 10px,
    ${(props) => props.rightShadowColor} 20px 0 20px,
    ${(props) => props.bottomShadowColor} 0 0 30px,
    ${(props) => props.leftShadowColor} -20px 0 40px,
    ${(props) => props.innerTopShadowColor} inset 0 50px 30px,
    ${(props) => props.innerRightShadowColor} inset 50px 0 30px,
    ${(props) => props.innerBottomShadowColor} inset 0 -50px 30px,
    ${(props) => props.innerLeftShadowColor} inset -50px 0 30px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const Image = styled.img`
  width: 610px;
  height: 410px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  border-radius: 20px;
  opacity: 0.8;
`;

const Input = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;
export default function HollowRectangle(props) {
  const [topShadowColor, setTopShadowColor] = useState("#f50057");
  const [rightShadowColor, setRightShadowColor] = useState("#08d5d9");
  const [bottomShadowColor, setBottomShadowColor] = useState("#f50057");
  const [leftShadowColor, setLeftShadowColor] = useState("#f50057");
  const [innerTopShadowColor, setInnerTopShadowColor] = useState("#08d5d9");
  const [innerRightShadowColor, setInnerRightShadowColor] = useState("#512da8");
  const [innerBottomShadowColor, setInnerBottomShadowColor] =
    useState("#2196f3");
  const [innerLeftShadowColor, setInnerLeftShadowColor] = useState("#f50057");

  return (
    <Container>
      <Rectangle
        topShadowColor={topShadowColor}
        rightShadowColor={rightShadowColor}
        bottomShadowColor={bottomShadowColor}
        leftShadowColor={leftShadowColor}
        innerTopShadowColor={innerTopShadowColor}
        innerRightShadowColor={innerRightShadowColor}
        innerBottomShadowColor={innerBottomShadowColor}
        innerLeftShadowColor={innerLeftShadowColor}
      />
      <Image src="Nature.jpg" alt="Image" />
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
    </Container>
  );
}  