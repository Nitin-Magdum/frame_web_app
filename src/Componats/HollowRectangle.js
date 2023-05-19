import styled from "styled-components";

const Container = styled.div`
  position: relative;
 `;

const Rectangle = styled.div`
  width: 600px;
  height: 400px;
  box-shadow: ${(props) => props.topShadowColor} 0 0 10px,
    ${(props) => props.rightShadowColor} 20px 0 20px,
    ${(props) => props.bottomShadowColor} 0 0 30px,
    ${(props) => props.leftShadowColor} -20px 0 40px,
    ${(props) => props.innerTopShadowColor} inset 0 50px 30px,
    ${(props) => props.innerRightShadowColor} inset 50px 0 30px,
    ${(props) => props.innerBottomShadowColor} inset 0 -50px 30px,
    ${(props) => props.innerLeftShadowColor} inset -50px 0 30px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
    box-shadow: ${(props) => props.topShadowColor} 0 0 10px,
      ${(props) => props.rightShadowColor} 20px 0 20px,
      ${(props) => props.bottomShadowColor} 0 0 30px,
      ${(props) => props.leftShadowColor} -20px 0 40px,
      ${(props) => props.innerTopShadowColor} inset 0 50px 30px,
      ${(props) => props.innerRightShadowColor} inset 50px 0 30px,
      ${(props) => props.innerBottomShadowColor} inset 0 -50px 30px,
      ${(props) => props.innerLeftShadowColor} inset -50px 0 30px;
    background-color: ${(props) => props.backgroundColor};
    margin-left: 10px;
    margin-top: -100px;
    z-index: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
    box-shadow: none;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    margin-top: -440px;
    z-index: 1;
    margin-left: -10px;
  }
`;

export default function HollowRectangle(props) {
  const {
    topShadowColor,
    rightShadowColor,
    bottomShadowColor,
    leftShadowColor,
    innerTopShadowColor,
    innerRightShadowColor,
    innerBottomShadowColor,
    innerLeftShadowColor,
  } = props;

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
    </Container>
  );
}
