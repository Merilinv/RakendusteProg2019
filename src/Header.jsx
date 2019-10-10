import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
      <div className={"header"}>
        <Link to={"/"}>
          <img className='logo' src="/images/logo.png" alt="LOGO"></img>
        </Link>
        <button className='header__buttons' type="submit">Login/Sign up</button>
        <button className='header__buttons' type="submit">Cart</button>
      </div>
    );
  };

  export default Header;