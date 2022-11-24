import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDataFromPokemon } from "../Services";
import { Container, Grid, Chip, Button } from "@mui/material";
import React from "react";

const FlagDetail = () => {
  const { name } = useParams();
  const history = useNavigate();
  const [country, setCountry] = useState({});

  const fetchCountry = async () => {
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/name/${name}`
    );
    setCountry(response);
  };

  useEffect(() => {
    fetchCountry();
  }, []);

  return (
    <Container>
      <Button variant="outlined" onClick={() => history(-1)}>
        Back/volver
      </Button>
      {Object.keys(country).length > 0 && (
        <Grid
          container
          alignItems="center"
          spacing={3}
          sx={{ height: "100vh" }}
        >
          <Grid item md={6}>
            <img src={country[0].flags?.svg} width={400} alt="" />
          </Grid>
          <Grid item md={6}>
            <h3>{country.name?.official}</h3>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default FlagDetail;
