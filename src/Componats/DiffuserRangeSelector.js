import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderContainerWidth = isMobile ? "100%" : "100%";

  return (
    <Box sx={{ width: sliderContainerWidth }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Slider
          aria-label="Restricted values"
          defaultValue={50}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={valuetext}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          sx={{
            touchAction: "pan-y",
            "& .MuiSlider-rail": {
              height: "6px",
              borderRadius: "3px",
            },
            "& .MuiSlider-track": {
              height: "6px",
              borderRadius: "3px",
            },
            "& .MuiSlider-thumb": {
              width: "14px",
              height: "14px",
              marginTop: "-4px",
              marginLeft: "-7px",
            },
          }}
        />
      </Box>
    </Box>
  );
}
