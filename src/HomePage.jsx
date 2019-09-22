import React from "react";
import {oils, watercolors, myPaintings} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";


class Homepage extends React.PureComponent{
    constructor(props){
      super(props);
      this.state = { 
        items: myPaintings
      }
    }
    handleChange(event){
      console.log(event.target.value);
      console.log("App state", this.state);
  
      switch(event.target.value){
        case "oils":{
          this.setState({
            items:oils,
          });
          break;
        }
        case "watercolors":{
          this.setState({
            items:watercolors,
          });
          break;
        }
        case "myPaintings":{
          this.setState({
            items:myPaintings,
          });
          break;
        }
      }
    };
    render(){
      return (
        <>
          <Header/>
          <select onChange={this.handleChange.bind(this)}>
            <option value="oils">Oil</option>
            <option value="watercolors">Watercolor</option>
            <option value="myPaintings">My paintings</option>
          </select>
          <ItemList items={this.state.items} />
        </>
      )
    }
  }
  export default Homepage;