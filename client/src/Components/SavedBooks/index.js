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
                                key={book._id}
                                image={book.image}
                                title={book.title}
                                authors={book.authors}
                                description={book.description}
                                link={book.link}
                                bookId={book.id}
                                id={book._id}
                                loadBooks={this.loadBooks}
                            />
                        );
                    })}
            </div>
        );
    };

};

export default SavedBooks;