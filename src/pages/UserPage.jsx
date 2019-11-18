import React from "react";
import PropTypes from "prop-types";

class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object.isRequired,
    };
    render(){
        return(
            <>
                <div><h1>User page</h1></div>
                <div style={{color: "violet"}}>
                You are {this.props.user.email}, created at {this.props.user.createdAt}
                </div>
            </>
        );        
    }
}

export default UserPage;