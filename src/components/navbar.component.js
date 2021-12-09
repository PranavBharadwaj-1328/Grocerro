import React, { Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <Link className="navbar-brand" to="/">Cart</Link> */}
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                            <Link className="navbar-brand" to="/">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="navbar-brand" to="/addItem">Add Item</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
}