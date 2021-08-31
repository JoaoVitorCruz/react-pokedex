const API_BASE = "https://pokeapi.co/api/v2/";

async function basicFetch(endpoint, callback = false) {
    const data = await fetch(`${API_BASE}${endpoint}`)
    const json = await data.json()

    if(callback) {
        callback(json)
    } else {
        return json
    }
}


export default basicFetch