import React, { createContext, useState, useEffect } from "react";
import hexToRgb from "./HexToRGB";
import SnackBar from "../../Componats/SnackBar";

export const ColorContext = createContext();

export const ColorContextProvider = ({ children }) => {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [buttonclick, setButtonclick] = useState(false);
  const [snackbar, setSnackbar] = useState(false);
  const [diffusion, setDiffusion] = useState(50);
  const [submitslider, setSubmitslider] = useState(false);
  const [audio, setAudio] = useState([]);
  const [uploadstatus, setUploadstatus] = useState(false);
  const [audiourl, setAudiourl] = useState(null);

  const contextValue = {
    top,
    setTop,
    bottom,
    setBottom,
    left,
    setLeft,
    right,
    setRight,
    setButtonclick,
    snackbar,
    setSnackbar,
    diffusion,
    setDiffusion,
    submitslider,
    setSubmitslider,
    audio,
    setAudio,
    uploadstatus,
    setUploadstatus,
    audiourl,
    setAudiourl,
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
        await fetch(
          "https://mockup--pro-default-rtdb.firebaseio.com/ColourData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(colourData),
          }
        );
        setButtonclick(false);
        setSnackbar(true);
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

  useEffect(() => {
    const postSliderData = async () => {
      const sliderData = {
        diffusion,
      };

      try {
        await fetch(
          "https://mockup--pro-default-rtdb.firebaseio.com/sliderData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(sliderData),
          }
        );
        setSubmitslider(false);
        setSnackbar(true);
      } catch (error) {
        console.error("Error posting sliderData:", error);
      }
    };

    if (submitslider) {
      const sliderData = { diffusion };
      console.log("From Context sliderData", sliderData);
      postSliderData();
    }
  }, [submitslider, diffusion]);

  useEffect(() => {
    const uploadAudioData = async () => {
      const audioFileName = { audiourl };

      try {
        await fetch(
          "https://mockup--pro-default-rtdb.firebaseio.com/audioData.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ audioFileName }),
          }
        );

        setUploadstatus(false);
        setSnackbar(true);
        console.log("Audio file uploaded successfully");
      } catch (error) {
        console.error("Error uploading audio file:", error);
      }
    };

    if (uploadstatus) {
      uploadAudioData();
    }
  }, [uploadstatus, audiourl]);

  return (
    <ColorContext.Provider value={contextValue}>
      {children}
      {snackbar && <SnackBar onClose={() => setSnackbar(false)} />}
    </ColorContext.Provider>
  );
};
