//this component is going to be contain all of the states, logic, and search box
import React, { useState } from 'react';
import axios from 'axios';
import Bookcard from "../BookCard";
import './style.css'

function Books() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);

    // creating handleFormSubmit for API call
    function handleFormSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&maxResults=40")
            .then(data => {
                console.log(data.data.items);
                setResult(data.data.items);
            })
    }

    //creating handlesearch method..have to fire an event..
    function handleSearch(event) {
        const book = event.target.value;
        setBook(book);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input className="searchField" type="text" placeholder="Search for a book" onChange={handleSearch} />
                <button className="searchBtn" type="submit">Search</button>
            </form>
            <div className="list">
                {
                    result.map((book) => {
                        return <Bookcard
                            key={book.id}
                            bookId={book.id}
                            image={book.volumeInfo.imageLinks?.thumbnail}
                            title={book.volumeInfo.title}
                            authors={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            link={book.volumeInfo.previewLink}
                        />

                    })
                }

            </div>
        </div>
    )
}

export default Books;