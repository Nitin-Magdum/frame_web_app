import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/system";
import FullScreenDialog from "./PopUpColour";


const BlackLabel = styled("span")`
  color: black;
  font-weight: bold;
`;

export default function SimpleGrow(props) {

  const [smell, setSmell] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [touch, setTouch] = useState(true);
  const [test, setTest] = useState(true);

  const handleChangeSmell = (event) => {
    setSmell(event.target.checked);
  };

  const handleChangeSounds = (event) => {
    setSounds(event.target.checked);
  };

  const handleChangeTouch = (event) => {
    setTouch(event.target.checked);
  };
  const handleChangeTest = (event) => {
    setTest(event.target.checked);
  };

  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FullScreenDialog />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={smell} onChange={handleChangeSmell} />}
            label={<BlackLabel>Smell</BlackLabel>}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={sounds} onChange={handleChangeSounds} />}
            label={<BlackLabel>Sound</BlackLabel>}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={touch} onChange={handleChangeTouch} />}
            label={<BlackLabel>Touch</BlackLabel>}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={test} onChange={handleChangeTest} />}
            label={<BlackLabel>Test</BlackLabel>}
          />
        </Box>
      </Box>
    </div>
  );
}
