import React from "react";
import { Link } from "react-router-dom";
import { userIcon } from "../icons";
import { cartIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./AuthConsumer.jsx";

const Header = ({ user }) => {
  return (
    <div className={"header"}>
      <Link to={"/"}>
        <img className='logo' src="/static/images/logo.png" alt="LOGO"></img>
      </Link>
      <div className="header__buttons">
        <Link className="header__button" to={"/checkout/cart"}>
            <img  src={cartIcon} alt="" />
            <p>Cart</p>
        </Link>
        {user.email && <WelcomeIcon user={user} />}
        {!user.email && <LoginRegistrationIcon />}
      </div>
      

        
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
};

const WelcomeIcon = ({ user }) => (
  <Link className={"header__button"} type="submit" to={`/users/${user._id}`}>
    <img src={userIcon} alt=""  />
    <p>Welcome, {user.email}</p>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.object.isRequired,
};

const LoginRegistrationIcon = () => (
  <div>
    <Link className={"header__button"} type="submit" to={"/login"}>
      <img src={userIcon} alt=""  />
      Login/Sign up </Link>
    <span className="gradient"></span>
  </div>
);

export default authConsumer(Header);