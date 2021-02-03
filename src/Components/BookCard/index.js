import React from 'react';
import './style.css'

function Bookcard(props) {
    return(
        <div className="bookContainer">
            <img src={props.image} alt={props.title}/>
            <div className="renderData">
                <h2>
                    {props.title}
                </h2>
                <h3>
                    {props.author || "ANON"}
                </h3>
                <p>
                    {props.description || "No description available"}
                </p>
                {/* Buttons that will view or save book*/}
                <a href={props.link} target="__blank">
                <button type="submit">View</button>
                </a>
                <button type="submit">Save</button>
            </div>
        </div>

    )
}
export default Bookcard;