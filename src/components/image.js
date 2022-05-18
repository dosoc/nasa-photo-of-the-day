import React from 'react'

const Image = props => {
    return(
        <div className='image'>
            <h2>{props.image.title}</h2>
            <img src={props.image.hdurl}></img>
        </div>
    )
}

export default Image;