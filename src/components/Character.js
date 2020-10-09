import React from 'react';


const Character = props => {

    const {characterData} = props // array of objects consisting of character names 
    console.log(characterData)

    
    return (
        <div>
            {
                characterData.map((char) => {
                    return <div> 
                                <h1>{char.name}</h1>
                                <h2>{char.birth_year}</h2> 
                            </div>
                })
            }
        </div>
    )

    
}


export default Character;