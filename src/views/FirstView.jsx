import React from "react";
import mainlogo from "../img/mainlogo.png";
import user from "../img/user.png";
import newuser from "../img/newuser.png";

const FirstView = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-1/2 flex items-center justify-center">
        <img className="w-80 rounded-full mt-16" src={mainlogo} alt="Logo" />
      </div>
      <div className="w-screen h-1/2 flex ">
        <div className="w-screen h-60 flex items-end justify-around">
          <a className="flex flex-col items-center" href="./login.jsx">
            <img className="w-20 h-20" src={user} alt="User" />
            <h2 className="text-xl mt-1 text-[#EEEEEE]">Log in</h2>
          </a>
          <a href="./newuser.jsx" className="flex flex-col items-center">
            <img className="w-20 h-20" src={newuser} alt="" />
            <h2 className="text-xl mt-1 text-[#EEEEEE]">New User</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
