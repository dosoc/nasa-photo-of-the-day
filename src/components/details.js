import React from 'react'

function Details(props) {
    const {details, hide} = props
    return (
        <div className='container'>
            <p>{details.explanation}</p>
            <p>Copyright: {details.copyright}</p>
            <button onClick={hide}>Hide Explanation</button>
        </div>
    )
}

export default Details