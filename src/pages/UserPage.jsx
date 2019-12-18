import React from "react";
import PropTypes from "prop-types";
// import authConsumer from "../components/AuthConsumer.jsx";
// import protectedRedirect from "../components/ProtectedRedirect.jsx";
import { UserPropTypes } from "../store/reducer";
import {connect} from "react-redux";

class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
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

const mapStateToProps = (store) => {
    return {
        user: store.user,
    };
};

export default connect(mapStateToProps)(UserPage);
//export default authConsumer(protectedRedirect(UserPage)); 