import './pokeDisplay.css'

const pokeDisplay = (props)=> {
    
    const capitalize = (texto) => {
        let novoTexto = ''
        novoTexto += texto.charAt(0).toUpperCase() +  texto.slice(1)
        return novoTexto
    }
    
    const data = props.chosenpoke;
    
    const tipo = capitalize(data.types[0].type.name)
    const hp = data.stats[0].base_stat
    const attack = data.stats[1].base_stat
    const defense = data.stats[2].base_stat
    // const specialAttack = data.stats[3].base_stat
    // const specialDefense = data.stats[4].base_stat
    // const speed = data.stats[5].base_stat

    const tipoImg = require(`../img/pokemon-types/${tipo} type-10.png`)

    function handleNext() {
        if(data.id !== 898) {
            props.callback(data.id+1)
        } else {
            props.callback(1)
        }
    }

    function handlePrev() {
        if(data.id !== 1) {
            props.callback(data.id-1)
        } else {
            props.callback(898)
        }
    }

    return(
        <div>
            <div className="poke--name">
                <h2>{data.name}</h2>
            </div>
            
            <div className="poke--img" style={{
                backgroundImage: `url(${data.sprites.other['official-artwork'].front_default})`,
                backgroundSize: 'cover',
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                borderRadius: '15px',
                margin: '0 auto'
            }}>


                <div className="poke--stats">
                    <div className="stats--img">
                        <img src={tipoImg.default} alt={tipo} />
                    </div>

                    <div>
                        <ul>
                            <li>❤{hp}</li>
                            <li>🗡{attack}</li>
                            <li>🛡{defense}</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="poke--control">
                <button className="prev--poke" onClick={()=>{handlePrev()}}>{'<<'}</button>
                <button className="next--poke" onClick={()=>{handleNext()}}>{'>>'}</button>
            </div>

        </div>
    )
}


// <div className="stats--atributes">
// <div className="poke--type">
// </div>
// </div>


export default pokeDisplay;