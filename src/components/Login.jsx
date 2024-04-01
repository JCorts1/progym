import React from "react";
import { useState } from "react";
import mainbutton from "../img/mainbutton.png"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChange = () => {

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegex.test(email) && password.length >= 7) {
      setMessage("Welcome");
      navigate('/welcome');
    } else {
      setMessage("Email or Password is invalid")
    }
  };
  return (
    <div className="w-screen h-screen mt-40 bg-[#222831] flex flex-col items-center">
      <div className="w-3/4 h-1/4 flex flex-col justify-center items-center">
        <label className="text-[#EEEEEE] text-lg mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="w-60 rounded-lg bg-[#EEEEEE]"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label className="text-[#EEEEEE] mb-2" htmlFor="password">Password:</label>
        <input className="w-60 rounded-lg bg[#EEEEEE]" type="password" 
        onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      
      <button onClick={() => handleChange(email)} className="flex flex-col items-center mt-14 text-[#EEEEEE]"><img className="mb-4" src={mainbutton} alt="MainButton" /></button>
      <div className="text-[#EEEEEE] text-lg">
        {message}
      </div>
    </div>
  );
};

export default Login;
