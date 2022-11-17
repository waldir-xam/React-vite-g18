//esto sera nuestro archico donde tendremos nuestros servicios

const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=200";
//que esta es un funcion generica
// cuando el parametro q usa la funcione . en esta caso usa url va llamr
//los datos de pokepai
// trae informacionn de otra API

export const getDataFromPokemon = async (url = BASE_URL) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    return data;
    //ahora debeme ejecutar
  } catch (error) {
    console.log(error.message);
  }
};
