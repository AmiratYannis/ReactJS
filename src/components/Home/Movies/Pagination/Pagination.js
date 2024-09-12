import React from 'react';
import "./Pagination.css"




const Pagination = ({ nbPages, currentPage, onPageChange, onPrevPage, onNextPage }) => {

    let pages = []



    const handlePageChange = (i) => {
        onPageChange(i)
    }

   


    for (let i = 1; i <= nbPages; i++) {
        pages.push(
            <button
                key={i}
                onClick={() => handlePageChange(i)}
                style={{
                    margin: '0 5px',
                    padding: '10px',
                    background: i === currentPage ? '#ccc' : '#fff',
                    border: '1px solid #000',
                }}
            >
                {i}
            </button>
        );
    }

    return (
        <div className='pagination'>
            <button
                onClick={onPrevPage}
                disabled={currentPage === 1}
                style={{ marginRight: '10px' }}
            >
                Previous
            </button>
            {pages}
            <button
                onClick={onNextPage}
                disabled={currentPage === nbPages}
                style={{ marginLeft: '10px' }}
            >
                Next
            </button>
        </div>
    );

};

export default Pagination;