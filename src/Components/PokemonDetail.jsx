import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  Slider,
  Chip,
} from "@mui/material";
import { getDataFromPokemon } from "../Services";
import { useState } from "react";
import { height } from "@mui/system";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState();
  const [pokemonData, setPokemonData] = useState({});
  
  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemonData(pokemon);
  };

  const handleOpenDialog = async () => {
    if (!abrir) {
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained">
        Ver Detalle
      </Button>
      <Dialog open={abrir} onClose={handleOpenDialog}>
        <DialogContent>
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h2 className="name-pokemon">{props.apodo}</h2>
              <Grid container>
                <Grid item md={6}>
                  <h4>habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRigth: 2 }}
                    />
                  ))}
                  <h4>Datos</h4>
                  {pokemonData.types.map((type) => (
                    <Chip
                      label={type.type.name}
                      color="warning"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                  <Chip
                    color="success"
                    sx={{ marginRight: 2 }}
                    label={`${pokemonData.weight / 10}kg`}
                  />
                  <Chip
                    color="success"
                    sx={{ marginRight: 2 }}
                    label={`${pokemonData.height / 10}kg`}
                  />
                  <h4>Puntos de Base</h4>
                  {pokemonData.stats.map((stat) => (
                    <div>
                      <h5>{stat.stat.name}</h5>
                      <Slider
                        defaultValue={+stat.base_stat}
                        aria-label="Always visible"
                        valueLabelDisplay="on"
                        disabled
                      />
                    </div>
                  ))}
                </Grid>
                <Grid item md={6}>
                  <img
                    width={285}
                    sx={{ padding: 2 }}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          )}
          <Button
            variant="outlined"
            onClick={handleOpenDialog}
            sx={{ width: 200, padding: 1, margin: 2 }}
          >
            Cerrar
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
