import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const flickerAnimation = keyframes`
  0% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`;

const getRandomColor = () => {
  const colors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "cyan",
    "brown",
    "magenta",
    "teal",
    "lime",
    "indigo",
    "silver",
    "gold",
    "navy",
    "olive",
    "maroon",
    "coral",
    "turquoise",
    "violet",
    "gray",
    "aquamarine",
    "salmon",
    "slate",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const LightsText = styled.h1`
  font-size: 35px;
  text-align: center;
  animation: ${flickerAnimation} 2s infinite;
  transition: color 2s;
`;

const Lights = () => {
  const [lightsOn, setLightsOn] = useState(true);
  const [textColor, setTextColor] = useState("white");

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setLightsOn((prevLightsOn) => !prevLightsOn);
      setTextColor(getRandomColor());
    }, 2000);

    return () => {
      clearInterval(flickerInterval);
    };
  }, []);

  return (
    <div>
      <LightsText
        style={{ color: textColor }}
        className={lightsOn ? "" : "off"}
      >
        Lights
      </LightsText>
    </div>
  );
};

export default Lights;
