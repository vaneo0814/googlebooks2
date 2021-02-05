import React, { Component } from "react";
import {getSavedBooks} from "../../utility/API";
import BookCard from "../BookCard";

class SavedBooks extends Component {

    state = {
        savedBooks: []
    };

    // componentDidMount loads saved books when the page loads
    componentDidMount() {
        this.loadBooks();
    };

    // loads books from database
    loadBooks = () => {
        getSavedBooks()
            .then(res => {
                this.setState({ savedBooks: res.data }, function () {
                    console.log(this.state.savedBooks);
                })
            })
            .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                    {this.state.savedBooks.map(book => {
                        return (
                            <BookCard
                                key={book.id}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                title={book.volumeInfo.title}
                                author={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                link={book.volumeInfo.previewLink}
                                id={book.id}
                                loadBooks={this.loadBooks}
                            />
                        );
                    })}
            </div>
        );
    };

};

export default SavedBooks;