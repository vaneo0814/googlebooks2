import React from 'react';
import { saveBook, deleteBook } from "../../utility/API";
import './style.css'

function Bookcard(props) {
    // function to handle saving book to db when save button is clicked
    console.log(props);
    const handleSaveBtn = () => {
        saveBook({
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link,
            bookId: props.bookId
        }).then(
            res => console.log(res)
        ).catch(err => console.log(err))
    };

    // function to handle deleting book from db when delete button is clicked
    const handleDeleteBtn = (bookId) => {
        deleteBook(bookId)
            .then(
                res => {
                    //call load books props here
                    props.loadBooks()
                    console.log(`handledeletebtn console` + props.bookId)
                    console.log(res);
                }).catch(err => console.log(err))
    };

    return (
        <div className="bookContainer" key={props.bookId}>
            <img src={props.image} alt={props.title} />
            <div className="renderData">
                <h2>
                    {props.title}
                </h2>
                <h3>
                    {props.authors || "ANON"}
                </h3>
                <p>
                    {props.description || "No description available"}
                </p>
                {/* Buttons that will view or save book*/}
                <a href={props.link} target="__blank">
                    <button type="submit">View</button>
                </a>
                <button type="submit" onClick={handleSaveBtn}>Save</button>
                <button type="submit" onClick={() => handleDeleteBtn(props.id)}>Delete</button>
            </div>
        </div>

    )
}
export default Bookcard;