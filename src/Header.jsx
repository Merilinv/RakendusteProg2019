import React from "react";
const Header = () => {
    return (
      <div className={"header"}>
        <img class='logo' src="images/logo.png" alt="LOGO"></img>
        <button class='header__buttons' type="submit">Login/Sign up</button>
        <button class='header__buttons' type="submit">Cart</button>
      </div>
    )
  };

  export default Header;