import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Movies = () => {
    const [data, setData]=useState([]);

    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ef7eb37291131cc6d9bdef8fc7fc9a98&language=en-US&page=1")
        .then((res) =>setData(res.data.results));
    },[])

    return (
        <div className="movies">
            <h1>Movies and Series</h1>
            <ul>{data.map((movie)=><li key={movie.id}>{movie.name}</li>)
            }</ul>
        </div>
    );
}

export default Movies;