import axios from "axios";
import React from "react";
import Card from "./Card";
import "./Movie.css";
import { useState } from "react";
import { useEffect } from "react";

const Movies = () => {
    const [data, setData]=useState([]);
    const [rangeValue,setRangeValue]=useState(5);
    const [selectedValue,setSelectedValue]=useState(0);
    const radios=[16,18,35,80,9648,10751,10759,10763,10765,10766,10768];

    useEffect(()=>{
        
                              /*   API REST 
                                    ||
                                     V

                               */
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ef7eb37291131cc6d9bdef8fc7fc9a98&language=en-US&page=1")
        .then((res) =>setData(res.data.results));
    },[])

    return (
        <div className="movies">
            <ul className="radio-container">
                <input type="range" min="1" max={data.length} defaultValue={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
                {radios.map((genre)=>(
                    <li>
                        <input type="radio" id={genre} name="genreRadio" onChange={(e)=>setSelectedValue(e.target.id)}/>
                        <label htmlFor={genre}>{genre}</label>
                    </li>
                ))}
            </ul>
            <ul class="movieList">
                {data
                .filter((movie)=>movie.genre_ids.includes(parseInt(selectedValue)))
                .sort((a,b)=>b.vote_count-a.vote_count)
                .slice(0,rangeValue)
                .map((movie,index)=>(
            <Card key={index} movie={movie}/>
            ))}</ul>
        </div>
    );
}

export default Movies;