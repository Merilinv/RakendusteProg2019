import React from "react";
import { Link } from "react-router-dom";
import {userIcon} from "./icons";
import {cartIcon} from "./icons";
import "./header.css";
const Header = () => {
    return (
      <div className={"header"}>
        <Link to={"/"}>
          <img className='logo' src="/images/logo.png" alt="LOGO"></img>
        </Link>
        <div className='header__buttons'>
          <div>
            <img src= {userIcon} alt="" style={{height:35}}/>
            <button  type="submit">Login/Sign up</button>
          </div>
          <div>
            <img src= {cartIcon} alt="" style={{height:35}}/>
            <button  type="submit">Cart</button>
          </div>
        </div> 
      </div>
    );
  };

  export default Header;