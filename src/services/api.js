function api(hogwartsHouse) {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${hogwartsHouse}`)
    .then(resp => resp.json())
}

export default api;