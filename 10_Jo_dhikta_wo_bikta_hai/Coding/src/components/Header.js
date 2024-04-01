import logo from "../Images/logo.jpg";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
  // let btnName = "Login";
  let [btnNameReact, setBtnNameReact] = useState("Login");
  let onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  console.log(data)
  return (
    <div className="flex justify-between shadow-lg">
      <div className="w-20">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status : {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">Help</li>
          <li className="px-4">Cart</li>
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
          <li className="px-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
