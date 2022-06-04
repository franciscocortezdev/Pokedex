

export async function getAllPokemon() {

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=5&offset=0`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
