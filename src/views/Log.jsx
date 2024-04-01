import React from "react";
import mainlogo from "../img/mainlogo.png";
import mainbutton from "../img/mainbutton.png";
import Login from "../components/Login";

const Log = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-1/2 flex items-center justify-center">
        <img className="w-80 rounded-full mt-16" src={mainlogo} alt="Logo" />
      </div>
        <Login></Login>
    </div>
  );
};

export default Log;
