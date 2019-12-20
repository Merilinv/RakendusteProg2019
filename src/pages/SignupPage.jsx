import * as services from "../services.js";
import React from "react";
import "./form.css";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {toast} from "react-toastify";

class SignupPage extends React.PureComponent{

    static propTypes = {
        history: PropTypes.object.isRequired,
    };
        
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "", 
            //confirmPassword: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", this.state);
        services.signup(this.state)
        .then( () => {
            this.props.history.push("/login");
            toast.success("Registreerumine oli edukas!");
        })
        .catch ( err => {
            console.log("Error", err);
            toast.error("Registreerumisel esines viga!");
        });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render(){
        return(
            <>
                <div><h1 >Sign up</h1></div>
                <div className="form">
                    <form className="register-form" onSubmit={this.handleSubmit} >
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
                        <button>create</button>
                        <p className="message">Already registered? <Link to={"/login"}>Sign In</Link></p>
                    </form>
                </div>
            </>
        );        
    }
}


export default SignupPage;
