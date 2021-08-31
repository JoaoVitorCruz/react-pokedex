import './App.css';
import pokeFetch from './pokeApi';
import dittoData from './dittoData.json';
import Search from './components/pokeSearch';
import PokeDisplay from './components/pokeDisplay';
import React, { useState, useEffect } from 'react';


function App() {
  let [chosenPoke, setChosenPoke] = useState(dittoData);

  useEffect(()=>{
    (async()=>{
      const data = await pokeFetch('pokemon/ditto')     
      setChosenPoke(data)
      
    })()
  },[])


  async function search(pokeName) {
    try {
      const data = await pokeFetch('pokemon/'+ pokeName)
      setChosenPoke(data)

    } catch(err) {
      console.warn(err)
    }
  }
  
  return (
    <div>
      <Search callback={search}/>
      
      <PokeDisplay chosenpoke = {chosenPoke}/>

    </div>
  );
}

export default App;
