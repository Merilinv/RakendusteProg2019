import React from "react";
import PropTypes from "prop-types";
import "./sortDropdown.css"; //https://codepen.io/yy/pen/vOYqYV


class SortDropdown extends React.PureComponent{
    state = {
        open: false,
    };

    handleTrigger = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render(){
        return(
            
            <div className={"custom-select-wrapper"} onClick={this.handleTrigger}>
                <div className={`custom-select sources ${this.state.open ? "opened" : ""}`}> {/*if opened, add "opened" to a className*/}
                    <span className={"custom-select-trigger"}>{getDirectionText(this.props.direction)} </span> {/* Is displayed  */}
                    <div className={"custom-options"}>
                        <span className={"custom-option"} onClick={() => this.props.onChange(1)}>{getDirectionText(1)}</span>
                        <span className={"custom-option"} onClick={() => this.props.onChange(-1)}>{getDirectionText(-1)}</span>
                    </div>
                </div>
            </div>
        );
    }
}
const getDirectionText = (x) => {
    switch(x){
        case 1: return "Price low to high";
        case -1: return "Price high to low";
    }
};


SortDropdown.propTypes = {
    direction: PropTypes.oneOf([1, -1]).isRequired,
    onChange : PropTypes.func.isRequired,
  };

export default SortDropdown;