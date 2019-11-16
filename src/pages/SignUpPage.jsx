import React from "react";
import "./form.css";
import {Link} from "react-router-dom";

class SignUpPage extends React.PureComponent{
        
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "", 
            confirmPassword: ""
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit", this.state);
        fetch("/api/users/signup", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then ( res => {
            console.log("Res", res);
        })
        .catch ( err => {
            console.log("Error", err);
        });
    }

    handleChange = (e) => {
        //console.log("handle change", e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };


    render(){
        return(
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
        );        
    }
}


export default SignUpPage;