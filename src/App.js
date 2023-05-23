import React from "react";
import "./App.css";
import ComponantSelection from "./Componats/MainScreen/ComponantSelection";
import { ColorContextProvider } from "./Context/ColourContext/ColorContext";

export default function App() {
  return (
    <div className="App">
      <ColorContextProvider>
        <ComponantSelection />
      </ColorContextProvider>
    </div>
  );
}
