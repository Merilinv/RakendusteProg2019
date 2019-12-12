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

      <div >
        {user.email && <WelcomeIcon user={user} />}
        {!user.email && <LoginRegistrationIcon />}

        <Link className="header__item" to={"/checkout/cart"}>
          <button className="instagram" type="submit">
            <img className={"button__image"} src={cartIcon} alt="" style={{ height: 35 }} />
            Cart</button>
          <span className="gradient"></span>
        </Link>
      </div>
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.object,
};

const WelcomeIcon = ({ user }) => (
  <Link className={"header__buttons"} type="submit" to={`/users/${user._id}`}>
    <img className={"button__image"} src={userIcon} alt="" style={{ height: 35 }} />
    <p>Welcome, {user.email}</p>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.object.isRequired,
};

const LoginRegistrationIcon = () => (
  <div>
    <Link className={"header__buttons"} type="submit" to={"/login"}>
      <img className={"button__image"} src={userIcon} alt="" style={{ height: 35 }} />
      Login/Sign up </Link>
    <span className="gradient"></span>
  </div>
);

export default authConsumer(Header);