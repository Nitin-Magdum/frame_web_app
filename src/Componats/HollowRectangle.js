import styled from "styled-components";

const Container = styled.div`
  position: relative;
  marginetop: -100px;
`;

const Rectangle = styled.div`
  width: 900px;
  height: 550px;
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
  z-index: 0;
  margin-top: -200px;

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
    margin-top: -10px;
    z-index: 0;
  }
`;

const Image = styled.img`
  width: 900px;
  height: 550px;
  object-fit: cover;
  border-radius: 20px;
  opacity: 0.8;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  margin-top: -200px;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 300px;
    box-shadow: none;
    position: relative;
    top: -15px;
    left: auto;
    transform: none;
    margin-top: -490px;
    z-index: 1;
    margin-left: -19px;
  }
`;

export default function HollowRectangle(props) {
  const {
    topShadowColor,
    rightShadowColor,
    bottomShadowColor,
    leftShadowColor,
  } = props;

  return (
    <Container>
      <Rectangle
        topShadowColor={topShadowColor}
        rightShadowColor={rightShadowColor}
        bottomShadowColor={bottomShadowColor}
        leftShadowColor={leftShadowColor}
        innerTopShadowColor={topShadowColor}
        innerRightShadowColor={rightShadowColor}
        innerBottomShadowColor={bottomShadowColor}
        innerLeftShadowColor={leftShadowColor}
      />
      <Image src="Nature.jpg" alt="Image" />
    </Container>
  );
}
