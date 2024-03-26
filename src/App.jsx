import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FirstView from "./views/FirstView";
import Log from "./views/Log";



const App = () => {
  return (
    <div className="w-scree h-screen bg-[#222831]">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstView />} />
        <Route path="/log" element={<Log />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};


export default App;
