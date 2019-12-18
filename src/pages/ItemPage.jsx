import React from "react";
import PropTypes from "prop-types";
import FancyButton from "../components/FancyButton.jsx";
import {connect} from "react-redux";
import {addItem} from "../store/store";
class ItemPage extends React.PureComponent{

  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount(){
    this.fetchItem();
  }

  fetchItem = () =>{
    fetch( `/api/v1/items/${this.props.match.params.itemId}`)
    .then( res =>{
      return res.json();
    })
    .then( item =>{
      console.log("item", item);
      this.setState({
        ...item
      });
    })
    .catch( err =>{
      console.log("item page", err);
    });
  };
  
  handleBuy = () => {
    //console.log("this.props", this.props);
    this.props.dispatch(addItem(this.state));
};

    render(){
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, elit vitae pharetra semper, massa dolor sagittis nisi, et imperdiet sapien massa non justo. Ut condimentum eros ornare, luctus turpis vitae, condimentum metus. Nunc semper lobortis lorem, non sagittis ex aliquet laoreet. Sed auctor quam sed leo efficitur iaculis. Nulla pulvinar vel urna sit amet rutrum. Nam tincidunt tortor eget odio ornare, eu semper risus mollis. Nullam pharetra quam ac justo malesuada dapibus. Nam interdum, mi in rhoncus ultrices, ex sapien pharetra diam, a scelerisque lorem mauris quis metus. Suspendisse sed diam et velit viverra accumsan. Quisque non est fringilla, luctus nibh sed, iaculis elit. Morbi maximus mauris ac leo tincidunt vestibulum. Nunc tempor lacinia lorem, sit amet tincidunt urna aliquet eu. Phasellus nec vestibulum urna. Quisque consectetur id libero consequat porttitor. Fusce vestibulum sit amet neque quis varius. Donec fringilla viverra malesuada.";
      
      return (
        <>
          <div className="glow"></div>
          <div className="itemContainer">
            <div className="item__title">{this.state.title}</div>
            <div className="item__price">{this.state.price}</div>
            <img className="item__image" src={this.state.imgSrc}/>   
            <div className="item__description">{description}</div>
            <div><FancyButton onClick={this.handleBuy}>Osta</FancyButton> </div>
          </div>
        </>
      );
    }
  }

  ItemPage.propTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };
  export default connect()(ItemPage);
