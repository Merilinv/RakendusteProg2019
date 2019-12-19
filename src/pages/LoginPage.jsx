import * as services from "../services.js";
import React from "react";
import "./form.css"; //https://codepen.io/colorlib/pen/rxddKy
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { userUpdate } from "../store/actions";
import {toast} from "react-toastify";
class LoginPage extends React.PureComponent{
    
    static propTypes = {
        history: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", this.state);
        services.login(this.state)
        .then(this.handleSuccess)
        .catch ( err => {
            console.log("Error", err);
            toast.error("Sisselogimisel esines viga!");
        });
    }

    handleChange = (e) => {
        //console.log("handle change", e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSuccess = ({user}) => {
        this.props.dispatch(userUpdate(user));
        this.props.history.push(`/users/${user._id}`);
    };

    render(){
        return(
            <>
                <div><h1 >Login</h1></div>
                <div className="form">
                    <form className="login-form" onSubmit={this.handleSubmit} >
                        <input 
                            type="email" 
                            placeholder="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <input
                            type="password" 
                            placeholder="password"
                            name="password"  
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <button>login</button>
                        <p className="message">Not registered? <Link to={"/signup"}>Create an account</Link></p>
                    </form>
                </div>
            </>
        );        
    }
}

export default connect()(LoginPage); 