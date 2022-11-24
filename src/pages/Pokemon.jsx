import { useEffect, useState } from "react";
import { getDataFromPokemon } from "../Services";
import { Container, Card, CardContent, CardMedia, Grid } from "@mui/material";
import "../pages/Pokemon.css";
import PokemonDetail from "../Components/PokemonDetail";

const Home = () => {
  const imgUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

  //vamor a crear hooks que manejaen el estado

  const [pokemons, setPokemon] = useState([]);

  //debemos crea una funcion que se encaghu de ejecutar a getdatdafronpokemon
  const fetchPokemonList = async () => {
    const listPokemones = await getDataFromPokemon();
    console.log("lista", listPokemones.results);
    setPokemon(listPokemones.results);
  };

  //en react exiuste ua funcion llamada useEffect  esta funcion ejecuita la pagina y rendeiza
  // lo primero que le deocmo peticion

  useEffect(() => {
    //impoertanteee por ahora en lo useEffect es necvesario colocalre un array vacio al termino ya
    //qye sino esto generaria un bucle infinito en la peticion
    fetchPokemonList();
  }, []);
  //al colcar los corchets dentro de useEffetc terminas la peticion
  return (
    <Container>
      <h1>Pokedex</h1>
      <Grid container spacing={3}>
        {pokemons.map((pokemon, index) => (
          //aca el codigo visual
          <Grid item xs={12} md={4} lg={4} sm={12}>
            <Card className="card-pokemon">
              <CardMedia
                component="img"
                className="img-pokemon"
                image={`${imgUrl}${index + 1}.svg`}
              />
              <CardContent>
                <h3>{pokemon.name}</h3>
                {/* //esto es otro component */}
                <PokemonDetail apodo={pokemon.name} url={pokemon.url} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
