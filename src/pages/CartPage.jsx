import React from "react";
import PropTypes from "prop-types";
import { getItems } from "../actions/itemsActions.js";
import { FaRegTrashAlt, FaAngleRight } from "react-icons/fa";
import "./cartPage.css";
class CartPage extends React.PureComponent {

    state = {
        rows: []
    };

    componentDidMount() {
        getItems().then(items => this.setState({rows: items.slice(0,4)})).catch(err => console.log("Error", err));
        console.error("something went wrong fetching items");
    }
    render() {
        return (
            <>
                <div><h1>Cart page</h1></div>

                <div className={"spacer"}>
                <div className={"box cart"}>
                    <Table 
                        rows={this.state.rows}
                    />
                </div>
                <div className={"box cart__summary"}>
                    <table>
                        <tbody>
                            <tr><td>Vahesumma</td><td>1615 €</td></tr>
                            <tr><td>Maksud</td><td>100 000 €</td></tr>
                            <tr><td>Kokku</td><td>101 615 €</td></tr>
                            <tr>
                                <td></td>
                                <td><div className={"submit-button"}>Vormista ost<FaAngleRight /></div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
            </>
        );
    }
}

const Table = ({rows}) => {
    return (
        <div className={"table"}>
            <div className={"row"}>
                <div className={"cell"}>Toode</div>
                <div className={"cell cell-grow"}>Nimetus</div>
                <div className={"cell"}>Kategooria</div>
                <div className={"cell cell--right"}>Summa</div>
                {/* for trash: */}
                <div className={"cell cell--small"}></div> 
            </div>
            {rows.map( row => <Row key={row._id} {...row} />)}
        </div>
    );
};
Table.propTypes = {
    rows: PropTypes.array.isRequired,
};

const Row = ({title, imgSrc, category, price}) => {
    return (
        <div className={"row"}>
            <div className={"cell"}>
                <img  src={imgSrc} />
            </div>
            <div className={"cell cell--grow"}> 
                {title}
            </div>
            <div className={"cell"}>
                {category}
            </div>
            <div className={"cell cell-right"}>
                {price} €
            </div>
            <div className={"cell cell--small cell--center"}>
                <FaRegTrashAlt/>
            </div>
        </div>
    );
};
export const ItemProps = {
    _id: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};
Row.propTypes = ItemProps; 

export default CartPage; 