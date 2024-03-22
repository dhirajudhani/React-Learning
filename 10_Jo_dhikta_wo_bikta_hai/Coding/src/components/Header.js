import logo from "../Images/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
  // let btnName = "Login";
  let [btnNameReact, setBtnNameReact] = useState("Login");
  let onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
