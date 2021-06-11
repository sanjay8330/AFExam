import React, { Component } from 'React';
import Axios from 'axios';

class ViewBooks extends Component {
    constructor(props) {
        super(props);
        this.navigateAuthorPage = this.navigateAuthorPage.bind(this);
        this.onBookSelection = this.onBookSelection.bind(this);
        this.onBookDeselection = this.onBookDeselection.bind(this);
        this.loadBookSelection = this.loadBookSelection.bind(this);
        this.state = {
            "books": [],
            "selectedBooks": [],
            "cost": 0
        }
    }

    //New Methods
    onBookSelection(index, bookPrice) {
        this.setState({ cost: this.state.cost += bookPrice });
        let tempSelection = this.state.selectedBooks;
        let book = tempSelection[index];
        book = {
            index, selected: true
        }
        tempSelection[index] = book;
        this.setState({ selectedBooks: tempSelection });
    }

    //New Method
    onBookDeselection(index, bookPrice) {
        this.setState({ cost: this.state.cost -= bookPrice });
        let tempSelection = this.state.selectedBooks;
        let book = tempSelection[index];
        book = {
            index, selected: false
        }
        tempSelection[index] = book;
        this.setState({ selectedBooks: tempSelection });
    }

    //New Method
    loadBookSelection(noOfBooks) {
        let i = 0;
        let tempArray = []
        while (i < noOfBooks) {
            tempArray.push({
                index: i,
                selected: false
            });
            i++;
        }
        this.setState({ selectedBooks: tempArray });
    }


    componentDidMount() {
        Axios.get('http://localhost:8080/book/getBooks')
            .then(response => {
                this.setState({ books: response.data.data });
                this.loadBookSelection(this.state.books.length);
            }).catch(error => {
                alert('Error Fetching data');
            })
    }

    navigateAuthorPage(e, bookId) {
        window.location = `/${bookId}`;
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Available Books</h1>
                        {this.state.books.length > 0 && this.state.books.map((item, index) => (
                            <div key={index} className="card mb-3">
                                <div className="p-3" onClick={e => this.navigateAuthorPage(e, item._id)}>
                                    <h4>Book Name          : {item.bookName}</h4>
                                    <h5>Book ISBN          : {item.ISBN}</h5>
                                    <h5>Book Price         : {item.bookPrice}</h5>
                                    <h6>Book Published Year: {item.bookYOP}</h6>
                                    <h6>Book Publisher     : {item.bookPublisher}</h6>
                                </div>
                                <div>
                                    {this.state.selectedBooks.length > 0 ?
                                        this.state.selectedBooks[index].selected ?
                                            <button className="btn btn-success" onClick={() => {
                                                this.onBookDeselection(index, item.bookPrice);
                                            }}>Selected</button> :
                                            <button className="btn btn-primary" onClick={() => {
                                                this.onBookSelection(index, item.bookPrice);
                                            }}>Select Book</button>
                                        : ""}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-sm">
                        <div className="card mt-5">
                            <div className="card-header">
                                <h1>Calculate Total Book Cost</h1>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="cost">Total Cost</label>
                                    <input type="number" className="form-control" id="cost" name="cost"
                                        value={this.state.cost} disabled />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ViewBooks;