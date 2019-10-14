import React from "react";
//import {myPaintings, watercolors, oils} from "./mydatabase.js";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Checkbox from "./Checkbox.jsx";


class Homepage extends React.PureComponent{

    constructor(props){
      super(props);
      this.state = { 
        items: [],
        allCategories: ["myPaintings", "watercolors", "oils"],
        selectedCategories: "myPaintings",
      };
    }

    

    componentDidMount(){
      console.log("mount");
      this.fetchItems();
    }

    fetchItems = () => {
      
      fetch("/api/items")
        .then(res => {
          console.log("res", res);
          return res.json();
        })
        .then(items => {
          console.log("items", items);
          this.setState({
            items
          });
        })
        .catch(err =>{
          console.log("err", err);
        });
    }

    // handleDropdown(event){
    //    console.log(event.target.value);
    //   this.setState({
    //     selectedCategory: event.target.value
    //   });
 
      // switch(event.target.value){
      //   case "myPaintings":{
      //     this.setState({
      //       items: myPaintings,
      //     });
      //     break;
      //   }
      //   case "watercolors":{
      //     this.setState({
      //       items: watercolors,
      //     });
      //     break;
      //   }
      //   case "oils":{
      //     this.setState({
      //       items: oils,
      //     });
      //     break;
      //   }
      // }
   

    getVisibleItems = () => {
      return this.state.items.filter( item => item.category === this.state.selectedCategory);
    };
    
  render(){
    console.log("App state", this.state);
    return (  
      <>
        <Header>
          <div className="glow"></div>
          <div className="category-wrapper"></div>
          Select category: 
          {
            this.state.allCategories.map(categoryName => {
              return(
                <Checkbox 
                  key = {categoryName}
                  name ={categoryName} 
                  onChange={this.getVisibleItems()}
                  checked = {true}
                />
              );
            })
          }
          
        
          {/* <select onChange={this.handleDropdown.bind(this)}>
            <option value="myPaintings">My paintings</option>
            <option value="watercolors">Watercolor</option>
            <option value="oils">Oil</option>
            </select> */}
        
        </Header>
          
        
        <ItemList items={this.getVisibleItems()} />
      </>
    );
  }
}
  export default Homepage;