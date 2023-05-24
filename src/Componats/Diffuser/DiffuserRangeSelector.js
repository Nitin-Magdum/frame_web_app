import React, { useContext,useState } from "react";
import { ColorContext } from "../../Context/ColourContext/ColorContext"; 
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";;


const marks = [
  {
    value: 0,
    label: "Low",
  },
  {
    value: 50,
    label: "Medium",
  },
  {
    value: 100,
    label: "High",
  },
];

function valuetext(value) {
  return `${value}`;
}

function valueLabelFormat(value) {
  const labelIndex = marks.findIndex((mark) => mark.value === value);
  if (labelIndex !== -1) {
    return marks[labelIndex].label;
  }
  return "";
}

export default function DiscreteSliderValues() {
  const { setDiffusion } = useContext(ColorContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedValue, setSelectedValue] = useState(50); // Initial value of the slider

  const sliderWidth = isMobile ? "100%" : 390;
  const sliderHeight = isMobile ? "100%" : 844;

  const handleSliderChange = (event, newValue) => {
    setSelectedValue(newValue);
    setDiffusion(newValue);
  };

  return (
    <Box sx={{ width: sliderWidth, height: sliderHeight }}>
      <Slider
        aria-label="Restricted values"
        value={selectedValue}
        onChange={handleSliderChange}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valuetext}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}
