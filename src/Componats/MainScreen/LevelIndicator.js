import React, { useState, useEffect } from "react";
import LiquidFillGauge from "react-liquid-gauge";
import { color } from "d3-color";
import { interpolateRgb } from "d3-interpolate";
import styled from "styled-components";

const GaugeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export default function LevelIndicator() {
  const [value, setValue] = useState(50);
  const [dataReceived, setDataReceived] = useState(false);

  const startColor = "#262626"; 

  const radius = dataReceived ? 90 : 70; 
  const interpolate = interpolateRgb(startColor, startColor);
  const fillColor = interpolate(value / 100);
  const gradientStops = [
    {
      key: "0%",
      stopColor: color(fillColor).toString(),
      stopOpacity: 1,
      offset: "0%",
    },
    {
      key: "100%",
      stopColor: color(fillColor).toString(),
      stopOpacity: 0.5,
      offset: "100%",
    },
  ];

  //This useEffect is Reserve for geting values from Firebase and setting the level
  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      // Assuming data is received
      setDataReceived(true);

      // Update value based on received data from Firebase
      const receivedValue = 60; // Will Replace with the actual received data
      setValue(receivedValue);
    }, 2000);
  }, []);

  return (
    <GaugeContainer>
      <LiquidFillGauge
        style={{ margin: "0 auto" }}
        width={radius * 2}
        height={radius * 2}
        value={dataReceived ? value : 50}
        percent="%"
        textSize={1}
        textOffsetX={0}
        textOffsetY={0}
        textRenderer={(props) => {
          const value = Math.round(props.value);
          const radius = Math.min(props.height / 2, props.width / 2);
          const textPixels = (props.textSize * radius) / 2;
          const valueStyle = {
            fontSize: textPixels,
          };
          const percentStyle = {
            fontSize: textPixels * 0.6,
          };

          return (
            <tspan>
              <tspan className="value" style={valueStyle}>
                {value}
              </tspan>
              <tspan style={percentStyle}>{props.percent}</tspan>
            </tspan>
          );
        }}
        riseAnimation
        waveAnimation
        waveFrequency={2}
        waveAmplitude={1}
        gradient={dataReceived}
        gradientStops={gradientStops}
        circleStyle={{
          fill: fillColor,
        }}
        waveStyle={{
          fill: fillColor,
        }}
        textStyle={{
          fill: color("#444").toString(),
          fontFamily: "Arial",
        }}
        waveTextStyle={{
          fill: color("#000").toString(),
          fontFamily: "Arial",
        }}
      />
    </GaugeContainer>
  );
}
