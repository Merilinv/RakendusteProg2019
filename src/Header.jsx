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
        <div >
          <div>
            <button className="header__buttons" type="submit">
              <img className="button__image" src= {userIcon} alt="" style={{height:35}}/>
              Login/Sign up</button>
            <span className="gradient"></span>
          </div>
          
          <div>
            <button className="instagram" type="submit">
              <img className="button__image" src= {cartIcon} alt="" style={{height:35}}/>
              Cart</button>
            <span className="gradient"></span>
          </div>
        </div>       
      </div>
    );
  };

  export default Header;