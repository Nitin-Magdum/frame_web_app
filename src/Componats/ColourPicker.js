import React from "react";
import CircularColor from "react-circular-color";

const ColourPicker = (props) => {
  const handleColorChange = (color) => {
    props.setColour(color);
  };
  return <CircularColor size={300} onChange={handleColorChange} />;
};

export default ColourPicker;
