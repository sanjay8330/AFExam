import React, { Component } from 'react';
import Select from 'react-select';
import Axios from 'axios';

const initalStates = {
    "bookName": '',
    "ISBN": 0,
    "bookAuthor": '',
    "bookPrice": 0,
    "YOP": 0,
    "publisher": '',
    "authorList": [],
    "authorOptions": [],
    "selectedAuthor": ''
}
class AddBook extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSelected = this.onSelected.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initalStates;
    }

    componentDidMount() {
        Axios.get('http://localhost:8080/author/getAuthors')
            .then(response => {
                this.setState({ authorList: response.data.data }, () => {
                    let data = [];
                    this.state.authorList.map((item, key) => {
                        let author = {
                            value: item._id,
                            label: item.firstName+" "+item.lastName
                        }
                        data.push(author);
                    });
                    this.setState( { authorOptions: data });
                });
            })
    }

    onSelected(e){
        this.setState( { selectedAuthor: e.value });
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        let book = {
            "bookName": this.state.bookName,
            "ISBN": this.state.ISBN,
            "bookAuthor": this.state.selectedAuthor,
            "bookPrice": this.state.bookPrice,
            "bookYOP": this.state.YOP,
            "bookPublisher": this.state.publisher
        }
        Axios.post('http://localhost:8080/book/addBook', book)
        .then(response => {
            alert('Book Data added Successfully');
        }).catch(error => {
            alert(error.message);
        })
    }

    render() {
        return (
            <div className="container">
                <h1>Create Book</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="bookName" className="form-label">Book Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="bookName"
                            name="bookName"
                            value={this.state.bookName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookISBN" className="form-label">Book ISBN</label>
                        <input
                            type="number"
                            className="form-control"
                            id="ISBN"
                            name="ISBN"
                            value={this.state.ISBN}
                            onChange={this.onChange}
                        />
                    </div>
                    <Select
                        options={this.state.authorOptions}
                        onChange={this.onSelected}
                    />
                    <div className="mb-3">
                        <label htmlFor="bookPrice" className="form-label">Book Price</label>
                        <input
                            type="number"
                            className="form-control"
                            id="bookPrice"
                            name="bookPrice"
                            value={this.state.bookPrice}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookYOP" className="form-label">Book Published Year</label>
                        <input
                            type="number"
                            className="form-control"
                            id="YOP"
                            name="YOP"
                            value={this.state.YOP}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bookPublisher" className="form-label">Book Publisher</label>
                        <input
                            type="text"
                            className="form-control"
                            id="publisher"
                            name="publisher"
                            value={this.state.publisher}
                            onChange={this.onChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBook;