import React from "react";
import mainlogo from "../img/mainlogo.png";
import mainbutton from "../img/mainbutton.png";

const Log = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-1/2 flex items-center justify-center">
        <img className="w-80 rounded-full mt-16" src={mainlogo} alt="Logo" />
      </div>
      <div className="w-screen h-1/4 bg-[#fff]">
        <div></div>
      </div>
      <div className="w-screen h-1/4 flex justify-center">
        <a  className="flex flex-col justify-center items-center" href="./workout">
          <img
            className="w-28 h-28 ml-4"
            src={mainbutton}
            alt="MainButton"
          />
          <h2 className="text-[#EEEEEE] text-xl mt-2 ml-4">Start</h2>
        </a>
      </div>
    </div>
  );
};

export default Log;
