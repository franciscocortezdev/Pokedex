const responsePoke = apiResponse => {
  return apiResponse.results.map(pokemon => {
    return fetch(pokemon.url)
      .then(response => response.json())
      .then(pokemon => pokemon)
  })
}

export function getAllPokemon (offset = 0) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=4&offset=${offset}`)
    .then(response => response.json())
    .then(data => responsePoke(data))
}

export function getPokemon (PokeName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}/`)
    .then(response => response.json())
    .then(data => data)
}
