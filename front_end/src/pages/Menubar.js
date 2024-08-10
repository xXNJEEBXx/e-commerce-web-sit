import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Check_login from './components/auth/Check_login';
import $ from "jquery";
import swal from 'sweetalert';

export default class Menubar extends Component {

    render() {
        return (
            <div>
                <nav style={{
                    borderTop: "5px solid blue",
                    borderBottom: " 2px solid gray",
                }}
                    className="navbar navbar-expand-lg navbar-light " >
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Edit_Page" className="nav-link active" aria-current="page">Edit page</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/#" className="nav-link"><i className="fas fa-shopping-cart"></i></a>
                                </li>
                            </ul>

                            <div style={{ marginLeft: " 10px" }} className="d-flex">
                                <Check_login
                                    login={
                                        <div style={{ marginLeft: " 10px" }} className="d-flex">
                                            <div><Link to="/Profile" >Your profile</Link ></div>
                                        </div>
                                    }
                                    not_login={
                                        <div style={{ marginLeft: " 10px" }} className="d-flex">
                                            <div className="d-flex">
                                                <Link to="/Login" >Login</Link >
                                            </div>
                                            <div style={{ marginLeft: " 10px" }} className="d-flex">
                                                <Link to="/Sigin_in">Register</Link>
                                            </div>
                                        </div>
                                    } />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}




