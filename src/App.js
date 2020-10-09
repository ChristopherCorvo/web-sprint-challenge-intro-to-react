import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'; // allow for the import from starwars api

// Importing components 
import Character from './components/Character';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [ characterData, setCharacterData] = useState([]) // adding a slice of state i.e starwars characters

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        setCharacterData(res.data.results)
      })
      .catch(err =>{
        console.log('Error getting data from StarWars API')
      })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1> {/* get rid of this div later  */}
      <Character characterData = {characterData}/>
    </div>
  );
}

export default App;
