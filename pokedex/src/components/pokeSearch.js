import './pokeSearch.css';
import React, { useState } from 'react'


const PokeSearch = (cbFunction) => {
    let [search, setSearch] = useState('')

    return(
        <div>
            <form onSubmit={(e)=>{e.preventDefault();cbFunction.callback(search)}}>
                    <div className="search">
                        <input type="text" placeholder="Pesquisar Pokemon" onChange={(e)=>{setSearch(((e.target.value).toLowerCase().trim()))}}/>
                        <input type="submit" value="buscar"/>
                    </div>
            </form>
        </div>
    )
}

export default PokeSearch;