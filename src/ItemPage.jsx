import React from "react";
import Header from "./Header.jsx";
import {myPaintings} from "./mydatabase";


class ItemPage extends React.PureComponent{
 
  
    render(){
        const item = myPaintings[0];
        const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, elit vitae pharetra semper, massa dolor sagittis nisi, et imperdiet sapien massa non justo. Ut condimentum eros ornare, luctus turpis vitae, condimentum metus. Nunc semper lobortis lorem, non sagittis ex aliquet laoreet. Sed auctor quam sed leo efficitur iaculis. Nulla pulvinar vel urna sit amet rutrum. Nam tincidunt tortor eget odio ornare, eu semper risus mollis. Nullam pharetra quam ac justo malesuada dapibus. Nam interdum, mi in rhoncus ultrices, ex sapien pharetra diam, a scelerisque lorem mauris quis metus. Suspendisse sed diam et velit viverra accumsan. Quisque non est fringilla, luctus nibh sed, iaculis elit. Morbi maximus mauris ac leo tincidunt vestibulum. Nunc tempor lacinia lorem, sit amet tincidunt urna aliquet eu. Phasellus nec vestibulum urna. Quisque consectetur id libero consequat porttitor. Fusce vestibulum sit amet neque quis varius. Donec fringilla viverra malesuada.";
      
      return (
        <>
          <Header/>
          <div className="glow"></div>
          <div className="itemContainer">
            <div className="item__title">{item.title}</div>
            <div className="item__price">{item.price}</div>
            <img className="item__image" src= {item.imgSrc}/>   
            <div className="item__description">{description}</div>
          </div>
        </>
      )
    }
  }
  export default ItemPage;