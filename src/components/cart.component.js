import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Cart extends Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            cart: [],
        }
    }
    /// Look at useEffect
    componentDidMount() {
        axios.get('http://localhost:5400/cart/')
            .then(response => {
                this.setState({
                    cart: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    deleteItem(id) {
        axios.delete('http://localhost:5400/cart/remove/' + id)
            .then(response => console.log(response.data));
        this.setState({
            cart: this.state.cart.filter(el => el._id !== id)
        })
    }

    itemList() {
        return this.state.cart.map(currentitem => {
            return <tr key={currentitem._id}>
                <td>{currentitem.itemname}</td>
                <td>{currentitem.quantity}</td>
                <td><button onClick={() => this.deleteItem(currentitem._id)} className="btn btn-danger">Delete</button></td>
            </tr>
        })
    }
    render() {
        return (
            <div>
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <Link className="navbar-brand" to="/">Cart</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                            <Link className="navbar-brand" to="/cart">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/addItem">Add Item</Link>
                        </li>
                    </ul>
                </div>
            </nav>
                <h3>Grocerry Cart</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.itemList()}
                    </tbody>
                </table>

            </div>
        );
    }
}