import * as selectors from "../store/selectors.js";
import React from "react";
import { Link } from "react-router-dom";
import { userIcon } from "../icons";
import { cartIcon } from "../icons";
import "./header.css";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { UserPropTypes } from "../store/reducer.js";

const Header = ({ user }) => {
  return (
    <div className={"header"}>
      <Link to={"/"}>
        <img className='logo' src="/static/images/logo.png" alt="LOGO"></img>
      </Link>
      <div className="header__buttons">
        {user && <WelcomeIcon user={user} />}
        {!user && <LoginRegistrationIcon />}
        <Link className="header__button" to={"/checkout/cart"}>
            <img  src={cartIcon} alt="" />
            <p>Cart</p>
            {user && <Badge>{user.cart.length}</Badge>}
            {!user && <Badge>{0}</Badge>}
        </Link>
      </div>
      

        
    </div>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  user: PropTypes.shape(UserPropTypes),
};

const WelcomeIcon = ({ user }) => (
  <Link className={"header__button"} type="submit" to={`/users/${user._id}`}>
    <img src={userIcon} alt=""  />
    <p>Welcome, {user.email}</p>
  </Link>
);

WelcomeIcon.propTypes = {
  user: PropTypes.shape(UserPropTypes),
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
    cart: selectors.getCart(store),
    user: selectors.getUser(store)
  };
};

const Badge = ({children}) => {
  if(children == 0) return null;
  return (
      <span className={"badge"}>
          {children}
      </span>
  );
};

Badge.propTypes = {
  children: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header); 