import React from "react"; 
import { BrowserRouter } from "react-router-dom"; 
import { getApp } from "./utils/helpers";
import "./App.css";

function App() {
  const CurrentApp = getApp();
  console.log(CurrentApp);
  return (
    <div>
      <BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
    </div>
  );
}
export default App;
