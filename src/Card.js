import React from "react";
import "./Card.css";

const Card = ({movie}) =>{

    return (
        <li className="card">
            <img src={"https://www.themoviedb.org/t/p/original/"+movie.poster_path} alt={movie.name}/>  
            <div className="infos">
                <h2>{movie.name}</h2>
                <h3>{movie.overview}</h3>
                <h4>vote_count:{movie.vote_count}</h4>
            </div>
        </li>
    );
}

export default Card;
