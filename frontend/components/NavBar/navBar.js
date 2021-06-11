import React, { Component } from 'react';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">SLIIT AF Project 2</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/addAuthor">Add Authors</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/addBook">Add Books</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/viewBooks">View Books</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )

    }
}

export default NavBar;