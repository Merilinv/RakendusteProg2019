import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRedirect = (WrappedComponent) => {
    return class extends React.PureComponent {
        static displayName = "protected-redirect-hoc";
        static propTypes = {
            user: PropTypes.object.isRequired,
        };
        render(){
            console.log("protected redirect", this.props);
            if (!this.props.user.email) return <Redirect to={"/"} />;
            return (
                <WrappedComponent {...this.props} />
            );
        }
    };
};

export default ProtectedRedirect; 