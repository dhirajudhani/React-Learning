import logo from "../Images/logo.jpg";
import { useState } from "react";
const Header = () => {
  // let btnName = "Login";
  let [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Help</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
                if(btnNameReact == "Login"){
                    setBtnNameReact("Logout");
                }
                else{
                    setBtnNameReact("Login");
                }
                
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
