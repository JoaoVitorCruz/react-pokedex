import './pokeDisplay.css'

const pokeDisplay = (chosenpoke)=> {
    const data = chosenpoke.chosenpoke;

    const tipo = data.types[0].type.name

    const hp = data.stats[0].base_stat
    const attack = data.stats[1].base_stat
    const defense = data.stats[2].base_stat
    const specialAttack = data.stats[3].base_stat
    const specialDefense = data.stats[4].base_stat
    const speed = data.stats[5].base_stat

    return(
        <div>
            <div className="poke--name">
                <h2>{data.name}</h2>
            </div>
                
            <span><strong>tipo:</strong> {tipo}</span>
            
            <div className="poke--img">
                <img alt={data.name} src={data.sprites.front_default}/>
            </div>

            <ul>
                <li>hp: {hp}</li>
                <li>attack: {attack}</li>
                <li>defense: {defense}</li>
                <li>specialAttack: {specialAttack}</li>
                <li>specialDefense: {specialDefense}</li>
                <li>speed: {speed}</li>
            </ul>
        </div>
    )
}


export default pokeDisplay;