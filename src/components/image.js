import React from 'react';
import styled, { keyframes } from 'styled-components';

const StyledCard = styled.div`
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
const StyledPhoto = styled.img`
    transition: 0.5s ease-in-out;
    &:hover {
        transform: scale(1.01);
        
    }
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

const Image = props => {
    return(
        <StyledCard>
            <h2>{props.image.title}</h2>
            <p>{props.image.date}</p>
            <StyledPhoto src={props.image.hdurl} alt={props.image.title}></StyledPhoto>
            <StyledButton onClick={()=> props.show()}>Show Explanation</StyledButton>
        </StyledCard>
    )
}

export default Image;