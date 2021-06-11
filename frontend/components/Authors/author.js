import React, { Component } from 'react';
import Axios from 'axios';

const initialStates = {
    "firstName": '',
    "lastName": '',
    "nationality": ''
}

class Author extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialStates;
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        let author = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "nationality": this.state.nationality
        }
        Axios.post('http://localhost:8080/author/addAuthor', author)
        .then(response => {
            alert('Author Details Added Successfully');
        }).catch(error => {
            alert('Error Occured', error.message);
        })
    }
    render() {
        return (
            <div className="container">
                <h1>Create Author</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="authorFirstName" className="form-label">Author First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorLastName" className="form-label">Author Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="authorNationality" className="form-label">Author Nationality</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nationality"
                            name="nationality"
                            value={this.state.nationality}
                            onChange={this.onChange}
                        />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Author;