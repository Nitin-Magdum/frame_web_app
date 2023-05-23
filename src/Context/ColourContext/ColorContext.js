import React, { createContext, useState } from "react";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [top, setTop] = useState("#000000");
  const [bottom, setBottom] = useState("#000000");
  const [left, setLeft] = useState("#000000");
  const [right, setRight] = useState("#000000");
  const [butoonlick, setButoonlick] = useState(false);

  const contextValue = {
    top,
    setTop,
    bottom,
    setBottom,
    left,
    setLeft,
    right,
    setRight,
    setButoonlick,
  };

  if (butoonlick) {
    const colourData = { top, bottom, left, right };
    console.log("From Context data", colourData);
  }

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
    </ColorContext.Provider>
  );
};
