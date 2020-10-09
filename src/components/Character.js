import React from 'react';
import styled from 'styled-components';


const MainCharcterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

const CharacterInfo = styled.div`
    display:flex;
    justify-content:space-between;
    border: 2px solid red;
    width: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    background-color: red;

    &:hover{
        box-shadow: 4px 3px 4px red ;
    }

    h1 {
        color: white;
    }

    h2 {
        color:white;
    }
    
`

const Character = props => {

    const {characterData} = props // array of objects consisting of character names 
    console.log(characterData)

    
    return (
        <MainCharcterContainer>
            {
                characterData.map((char) => {
                    return <CharacterInfo> 
                                <h1>{char.name}</h1>
                                <h2>{char.birth_year}</h2> 
                            </CharacterInfo>
                })
            }
        </MainCharcterContainer>
    )

    
}


export default Character;