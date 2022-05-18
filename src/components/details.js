import React, { useState, useEffect } from 'react'

function Details(props) {
    return (
        <div className='container'>
            <h3>{props.photo.date}</h3>
            <p>{props.photo.explanation}</p>
            <button>Show Explanation
            </button>
        </div>
    )
}

export default Details