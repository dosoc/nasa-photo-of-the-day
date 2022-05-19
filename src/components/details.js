import React from 'react'
import styled from 'styled-components'

const StyledDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    box-shadow: 1px 1px 4px black;
    margin: 2%;
    padding: 2%;
    border-radius: 20px;
    background-color: white;
`;

const StyledButton = styled.button`
    border-radius: 5px;
    box-shadow: 1px 1px 4px black;
    transition: 0.2s;

    &:hover {
        transform: scale(1.1);
        cursor: pointer;
    }
`;


function Details(props) {
    const {details, hide} = props
    return (
        <StyledDetails className='container'>
            <p>{details.explanation}</p>
            <p>Copyright: {details.copyright}</p>
            <StyledButton onClick={hide}>Hide Explanation</StyledButton>
        </StyledDetails>
    )
}

export default Details