import axios from "axios";
import React from "react";
import Card from "./Card/Card";
import "./Movie.css";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination/Pagination";

const Movies = () => {
    const movieByPage = 2
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // Calculate total number of pages
    const nbPages = Math.ceil(data.length / movieByPage);
    let [currentDatas, setCurrentDatas] = useState([]);


    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/tv/popular?api_key=ef7eb37291131cc6d9bdef8fc7fc9a98&language=en-US&page=1")
            .then((res) => {
                setData(res.data.results);
                console.log(currentDatas)
                let newDatas = [...res.data.results.slice(
                    (currentPage - 1) * movieByPage,
                    currentPage * movieByPage
                )]

                setCurrentDatas(newDatas)
                console.log(currentDatas)
            });

    }, [])


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setCurrentDatas([]);
        let newDatas = [...data.slice(
            (pageNumber - 1) * movieByPage,
            pageNumber * movieByPage
        )];

        setCurrentDatas(newDatas);
    };

    const handlePrevPage = () => {
        handlePageChange(currentPage - 1)
    };

    const handleNextPage = () => {
        handlePageChange(currentPage + 1)
    };






    return (
        <div className="movies">




            <ul className="movieList">
                {
                    currentDatas
                        .sort((a, b) => b.vote_count - a.vote_count)
                        .map((movie, index) => (
                            <Card key={index} movie={movie} />
                        ))}</ul>
            <Pagination nbPages={nbPages} currentPage={currentPage} onPageChange={handlePageChange}
                onPrevPage={handlePrevPage} onNextPage={handleNextPage} />

        </div>
    );
}

export default Movies;