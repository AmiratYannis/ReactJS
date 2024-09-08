import axios from "axios";
import React from "react";
import Card from "./Card";
import "./Movie.css";
import { useState } from "react";
import { useEffect } from "react";

const Movies = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(5);


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ef7eb37291131cc6d9bdef8fc7fc9a98&language=en-US&page=1")
            .then((res) => setData(res.data.results));
    }, [])

    return (
        <div className="movies">


            <ul className="radio-container">
                <label>Nombre de films  à affiché</label>
                <input type="range" min="1" max={data.length} defaultValue={rangeValue} onChange={(e) => setRangeValue(e.target.value)} />

            </ul>

            <ul className="movieList">
                {
                    data
                        .sort((a, b) => b.vote_count - a.vote_count)
                        .slice(0, rangeValue)
                        .map((movie, index) => (
                            <Card key={index} movie={movie} />
                        ))}</ul>
        </div>
    );
}

export default Movies;