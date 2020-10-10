import React from 'react';
import styled from 'styled-components';


const MainCharcterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CharacterInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    border: 2px solid red;
    width: 50%;
    margin-top: 1%;
    margin-bottom: 1%;
    padding-left: 1%;
    padding-right: 1%;
    background-color: red;
    border: 3px outset yellow;
    
    &:hover{
        box-shadow: 10px 10px 10px red ;
    }

    h1 {
        color: white;
    }

    .dropdown-content {
        display: none;
        flex-direction: column;
        /* position: absolute; */
        background-color: red;
        width: 100%;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        color: white;
    }

    .show {display:flex;}
`
    function myFunction() {
    
        // document.getElementById("myDropdown").classList.toggle("show");

        const dropDown = document.getElementsByClassName('myDropdown')

        for (let i = 0; i < dropDown.length; i++) {
            dropDown[i].classList.toggle('show')
            
        }
    }
    
const Character = props => {

    const {characterData} = props // array of objects consisting of character names 
    console.log(characterData)

   
    return (
        <MainCharcterContainer>
            {
                characterData.map((char) => {
                    return <CharacterInfo onClick={myFunction} > 
                                <h1>{char.name}</h1>
                                <div className="dropdown-content myDropdown">
                                    <div><h3>Gender: {char.gender}</h3></div>
                                    <div><h3>Height: {char.height}</h3></div>
                                    <div><h3>Mass: {char.mass}</h3></div>
                                    <div><h3>DOB: {char.birth_year}</h3></div>
                                    <div><h3>Eye Color: {char.eye_color}</h3></div>
                                    <div><h3>Hair Color: {char.hair_color}</h3></div> 
                                </div>
                                
                            </CharacterInfo>
                })
            }
        </MainCharcterContainer>
    )

    
}



export default Character;