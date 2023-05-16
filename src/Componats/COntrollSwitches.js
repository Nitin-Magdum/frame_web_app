import React, { useState } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Checkbox from "@mui/material/Checkbox";

export default function SimpleGrow() {
  const [checked, setChecked] = useState(false);
  const [led1Checked, setLed1Checked] = useState(true);
  const [led2Checked, setLed2Checked] = useState(true);
  const [led3Checked, setLed3Checked] = useState(true);
  const [led4Checked, setLed4Checked] = useState(true);
  const [smell, setSmell] = useState(true);
  const [sounds, setSounds] = useState(true);
  const [touch, setTouch] = useState(true);
  const [test, setTest] = useState(true);

  const handleChangeSwitchBox = () => {
    setChecked((prev) => !prev);
  };

  const handleLed1Change = (event) => {
    setLed1Checked(event.target.checked);
  };

  const handleLed2Change = (event) => {
    setLed2Checked(event.target.checked);
  };

  const handleLed3Change = (event) => {
    setLed3Checked(event.target.checked);
  };

  const handleLed4Change = (event) => {
    setLed4Checked(event.target.checked);
  };

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
          <FormControlLabel
            control={
              <Switch checked={checked} onChange={handleChangeSwitchBox} />
            }
            label="Lights"
          />
        </Box>
      </Box>

      <Box sx={{ marginLeft: "100px" }}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={led1Checked}
                onChange={handleLed1Change}
                disabled={!checked}
              />
            }
            label="LED 1"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={led2Checked}
                onChange={handleLed2Change}
                disabled={!checked}
              />
            }
            label="LED 2"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={led3Checked}
                onChange={handleLed3Change}
                disabled={!checked}
              />
            }
            label="LED 3"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={led4Checked}
                onChange={handleLed4Change}
                disabled={!checked}
              />
            }
            label="LED 4"
          />
        </FormGroup>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={smell} onChange={handleChangeSmell} />}
            label="Smell"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={sounds} onChange={handleChangeSounds} />}
            label="Sound"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={touch} onChange={handleChangeTouch} />}
            label="Touch"
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", height: 40 }}>
        <Box sx={{ marginLeft: "40px" }}>
          <FormControlLabel
            control={<Switch checked={test} onChange={handleChangeTest} />}
            label="Test"
          />
        </Box>
      </Box>
    </div>
  );
}
