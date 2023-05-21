import styled, { keyframes } from "styled-components";

const floatingAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  position: fixed;
  overflow: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ContentContainer = styled.div`
  z-index: 1;
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
`;

export const LeftSide = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto; 

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 1000px; 
    margin-top: 60px;
    order: 2; 
  }
`;

export const RightSide = styled.div`
  width: 20%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;

  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
    margin-top: 20px;
    order: 1; /* Change the order to 1 for mobile devices */
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50% 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    grid-template-rows: 1fr;
  }
`;

export const RowOne = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const RowTwo = styled.div``;

export const Input = styled.input`
  padding: 2px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const FloatingGradientText = styled.h1`
  background: linear-gradient(to right, #ff0000, #00ff00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${floatingAnimation} 3s infinite;
`;
