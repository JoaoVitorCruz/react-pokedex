import './App.css';
import pokeFetch from './pokeApi';
import pokeData from './pokeData.json';
import Search from './components/pokeSearch';
import PokeDisplay from './components/pokeDisplay';
import React, { useState, useEffect } from 'react';

function App() {
  let [chosenPoke, setChosenPoke] = useState(pokeData);

  useEffect(()=>{
    (async()=>{
      const data = await pokeFetch('pokemon/1')     
      setChosenPoke(data)
      
    })()
  },[])


  async function search(pokeName) {
    try {
      if(pokeName !== '') {
        const data = await pokeFetch('pokemon/'+ pokeName)
        setChosenPoke(data)
      }

    } catch(err) {
      console.warn(err)
    }
  }
  
  return (
    <div>
      <Search callback={search}/>
      
      <PokeDisplay chosenpoke = {chosenPoke} callback={search}/>

    </div>
  );
}

export default App;
