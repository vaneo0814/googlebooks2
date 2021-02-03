//this component is going to be contain all of the states, logic, and search box
import React, { useState } from 'react';
import axios from 'axios';
import Bookcard from "../BookCard";
import './style.css'

function Books() {
    // constructor(props) {
    //     super(props);
    //     // super(props) is a reference to the parents constructor() function, that's all it is. We have to add super(props) every single time we define a constructor() function inside a class-based component.
    //     this.state = {
    //         books: [], //storing books in this empty books array
    //         searchBox: '', //this will update state everytime a user searches in the search input field
    //     }
    // }
    //going to try a different approach under here...

    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [apiKey] = useState("AIzaSyBMzXeKC4Z5IIS7vmr-OZgfZb66i4dvV3Q");
    // axios.get("https://www.googleapis.com/books/v1/volumes?q");



    // creating handleFormSubmit for API call
    function handleFormSubmit(event) {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=40")
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
                    result.map((book, id) => {
                        return <Bookcard
                            key={id}
                            image={book.volumeInfo.imageLinks.smallThumbnail}
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
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