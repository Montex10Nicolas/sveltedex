const BASE_URL = "http://localhost:8000/api/v2/";

export function GetPokemon(id: number) {
  const url = new URL(`${BASE_URL}/${id}`);
  console.log(url);
  fetch(url);
}
