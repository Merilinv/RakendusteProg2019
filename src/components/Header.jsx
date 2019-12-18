import React from "react";
import { Link } from "react-router-dom";
import { userIcon } from "../icons";
import { cartIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import authConsumer from "./AuthConsumer.jsx";
import {connect} from "react-redux";
import {ItemProps} from "../pages/CartPage.jsx";

const Header = ({ user, cart }) => {
  console.log("header", cart);
  return (
    <div className={"header"}>
      <Link to={"/"}>
        <img className='logo' src="/static/images/logo.png" alt="LOGO"></img>
      </Link>
      <div className="header__buttons">
        <Link className="header__button" to={"/checkout/cart"}>
            <img  src={cartIcon} alt="" />
            <p>Cart</p>
            <Badge>{cart.length}</Badge>
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
  cart: PropTypes.arrayOf(ItemProps).isRequired,
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

const mapStateToProps = (store) => {
  return {
      cart: store.cart,
  };
};

const Badge = ({children}) => (
  <span className={"badge"}>
      {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(authConsumer(Header)); 