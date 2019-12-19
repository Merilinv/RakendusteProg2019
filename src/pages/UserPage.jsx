import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer.js";
import {connect} from "react-redux";
import FancyButton from "../components/FancyButton.jsx";
import { userUpdate, tokenUpdate } from "../store/actions.js";
import protectedRedirect from "../components/protectedRedirect.jsx";

class UserPage extends React.PureComponent {
    static propTypes = {
        user: PropTypes.shape(UserPropTypes),
        dispatch: PropTypes.func.isRequired,
    };

    handleLogout = () => {
        this.props.dispatch(userUpdate(null));
        this.props.dispatch(tokenUpdate(null));
    }

    render(){
        return(
            <>
                <div><h1>User page</h1></div>
                <div className="spacer">
                    <div className="box">
                        <div style={{display:"flex", justifyContent: "space-around"}}>
                            <div className="field">
                                {this.props.user.email}
                            </div>
                            <div className="field">
                                {this.props.user.createdAt}
                            </div>
                            <FancyButton onClick={this.handleLogout}>Logi välja</FancyButton>
                        </div>
                    </div>
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

export default connect(mapStateToProps)(protectedRedirect(UserPage)); 