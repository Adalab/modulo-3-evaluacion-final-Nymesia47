function api() {
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then(resp => resp.json())
}

export default api;