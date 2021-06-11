import React, { Component } from 'React';
import Axios from 'axios';

class ViewBookAuthor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "author": []
        }
    }

    componentDidMount() {
        Axios.get(`http://localhost:8080/book/getBookById/${this.props.match.params.bookId}`)
            .then(response => {
                this.setState({ author: response.data.bookAuthor });
            }).catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Book Author</h1>
                <h4>Author firstName  : {this.state.author.firstName}</h4>
                <h4>Author lastName   : {this.state.author.lastName}</h4>
                <h4>Author nationality: {this.state.author.nationality}</h4>
                
            </div>
        )
    }
}

export default ViewBookAuthor;