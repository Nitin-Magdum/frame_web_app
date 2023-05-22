import React from "react";
import "./App.css";
import ComponantSelection from "./Componats/ComponantSelection";


export default function App() {
  return (
    <div className="App">
      <ComponantSelection data-testid="componant-selection-component"/>
    </div>
  );
}

//imported in CompoantSelection 