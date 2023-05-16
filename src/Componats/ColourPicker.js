import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  margin-left: 50px;
  margin-right: 0px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 170px;
    justify-content: center;
  }
`;

const BigBoxLeft = styled.div`
  width: 900px;
  height: 700px;
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-bottom: 50px;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

export default function ColourPicker() {
  return (
    <Container>
      <BigBoxLeft />
    </Container>
  );
}
