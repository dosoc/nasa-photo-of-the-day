import React from 'react'

const Image = props => {
    return(
        <div className='container'>
            <h2>{props.image.title}</h2>
            <p>{props.image.date}</p>
            <img src={props.image.hdurl} alt={props.image.title}></img>
            <button onClick={()=> props.show()}>Show Explanation</button>
        </div>
    )
}

export default Image;