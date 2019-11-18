import React from "react";
import ItemList from "../components/ItemList.jsx";
import Checkbox from "../components/Checkbox.jsx";
import PropTypes from "prop-types";
import "./homepage.css";
import SortDropdown from "../components/SortDropdown.jsx";
import { getItems } from "../actions/itemsActions.js";
class Homepage extends React.PureComponent {

  constructor(props){
    super(props);
    this.state = { 
      items: [],
      allCategories: ["myPaintings", "watercolors", "oils"],
      selectedCategories: ["myPaintings"],
      sortDirection: -1,
    };
  }

  componentDidMount(){
    console.log("mount");
    this.fetchItems();
  }

  fetchItems = () => {
    
      getItems()
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

  handleFilterSelect = () => {
    const categoryName = event.target.name;
    //console.log(event.target.value, event.target.name);
    if(this.isSelected(categoryName)){
      return this.unselectCategory(categoryName);
    }
    
      this.selectCategory(categoryName);
    
  }

  selectCategory = (categoryName) =>{
    this.setState({
      selectedCategories: this.state.selectedCategories.concat(categoryName)
    });
  };

  unselectCategory = (categoryName) =>{
    const newArr = this.state.selectedCategories.filter( cn => cn !== categoryName);
    this.setState({
      selectedCategories: newArr
    });
  };

  handleSortDropdown = (sortDirection) =>{
    this.setState({
      sortDirection,
    });
  };
  

  getVisibleItems = () => {
    return this.state.items
    .filter( item => this.isSelected(item.category))
    .sort((a,b) => {
      switch(this.state.sortDirection){
        case -1: return b.price - a.price;
        case 1: return a.price - b.price;
      }
      
    });
  };

  isSelected = (name) => this.state.selectedCategories.indexOf(name) >= 0;
  
  render(){
    const items = this.getVisibleItems(); //no duplications allowed
    console.log("App state", this.state);
    return(
      <>
        <div className="glow"></div>
        <ItemFilters
          allCategories = {this.state.allCategories}
          handleDropdown = {this.handleFilterSelect}
          isSelected = {this.isSelected}
        />
        <div className={"items-settings"}>
          <div className={"items-found"}>
            Paintings found: {items.length} {this.state.selectedCategories.join(", ")}
          </div>
          <SortDropdown
            direction = {this.state.sortDirection}
            onChange = {this.handleSortDropdown}
          />
        </div>
        <ItemList items={items} />
      </>
    );
  }   
}

const ItemFilters = ({allCategories, handleDropdown, isSelected}) =>{
  return(
    <div className={"itemFilters-wrapper"}> 
      {
      allCategories.map(categoryName => {
        return(
          <Checkbox 
            key = {categoryName}
            name ={categoryName} 
            onChange={handleDropdown}
            checked = {isSelected(categoryName)}
          />
        );
      })
    }
    </div>
  );
};
  
ItemFilters.propTypes = {
  allCategories: PropTypes.array.isRequired,
  handleDropdown: PropTypes.func.isRequired,
  isSelected: PropTypes.func.isRequired,
};
  export default Homepage;