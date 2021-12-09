import { Component } from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';

export default class CreateItem extends Component {
    constructor(props) {
        super(props);
        this.onChangeItemname = this.onChangeItemname.bind(this);
        this.onChangeQuantity = this.onChangeQuantity.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemname: this.props.itemname,
            quantity: this.props.quantity
        }
    }
/// Functional components
    onChangeItemname(e) {
        this.setState({
            itemname: e.target.value
        });
    }

    onChangeQuantity(e) {
        this.setState({
            quantity: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const item = {
            itemname: this.state.itemname,
            quantity: this.state.quantity
        }
        console.log(item);
        axios.post('http://localhost:5400/cart/add', item)
            .then(res => console.log(res.data));
        window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>Add a new item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Item Name: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.itemname}
                            onChange={this.onChangeItemname} />
                    </div>
                    <div className="form-group">
                        <label>Quantity: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.quantity}
                            onChange={this.onChangeQuantity} />
                    </div>
                    <br/>
                    <div className="form-group">
                        <input type="submit" value="Add Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    };
}