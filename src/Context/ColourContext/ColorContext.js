import React, { createContext, useState, useEffect } from "react";
import hexToRgb from "./HexToRGB";
import SnackBar from "../../Componats/SnackBar"; // Assuming you have a separate Snackbar component

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [top, setTop] = useState("#262626");
  const [bottom, setBottom] = useState("#262626");
  const [left, setLeft] = useState("#262626");
  const [right, setRight] = useState("#262626");
  const [buttonclick, setbuttonclick] = useState(false);
  const [snckbar, setSnckbar] = useState(false);

  const contextValue = {
    top,
    setTop,
    bottom,
    setBottom,
    left,
    setLeft,
    right,
    setRight,
    setbuttonclick,
    snckbar,
    setSnckbar,
  };

  useEffect(() => {
    const postColorData = async () => {
      const colourData = {
        top: hexToRgb(top),
        bottom: hexToRgb(bottom),
        left: hexToRgb(left),
        right: hexToRgb(right),
      };

      try {
        await fetch("https://mockup--pro-default-rtdb.firebaseio.com/.json", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(colourData),
        });
        setbuttonclick(false);
        setSnckbar(true);
      } catch (error) {
        console.error("Error posting colourData:", error);
      }
    };

    if (buttonclick) {
      const colourData = { top, bottom, left, right };
      console.log("From Context data", colourData);
      postColorData();
    }
  }, [buttonclick, top, bottom, left, right]);

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
      {snckbar && <SnackBar onClose={() => setSnckbar(false)} />}
    </ColorContext.Provider>
  );
};
