import React from "react";
import { useState , useEffect } from "react";
import { LOGO_URL } from "./utils/costants";

const Header = () => {
  const [button, setbutton] = useState("Login");

  const handelclick = () => {
   setbutton( button === "Login" ? "Logout" : "Login");
  };

useEffect(() => {
  console.log("Header Render");
}, [button])

  return (
    <div className="header">
      <div className="Logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button onClick={handelclick}>{button}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
