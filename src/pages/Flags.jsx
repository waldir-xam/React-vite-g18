import React from "react";
import { getDataFromPokemon } from "../Services/index";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

function Flags() {
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  //funcione de compoenente
  const fetchContries = async () => {
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/all`
    );
    setCountries(response);
  };

  const handleRegion = async (e) => {
    setRegion(e.target.value);
    if (e.target.value === "all") {
      fetchContries();
      return;
    }
    setCountries([]);
    const response = await getDataFromPokemon(
      `https://restcountries.com/v3.1/region/${e.target.value}`
    );
    setCountries(response);
  }; //primero debenmos limpiar para poder volverl llenar los inputs

  const handleSearchCountry = (e) => {
    const countryName = e.target.value;
    if (countryName.length === 0) {
      fetchContries();
    }

    if (countryName.length > 3) {
      const filterCountries = countries.filter((country) =>
        country.name.official.toUpperCase().includes(countryName.toUpperCase())
      );
      setCountries(filterCountries);
    }
  };

  useEffect(() => {
    fetchContries();
  }, []);

  return (
    <Container>
      <h1>banderas</h1>
      <Grid container spacing={3}>
        <Grid item md={6}>
          <TextField
            label="Busca tu pais"
            onChange={handleSearchCountry}
            fullWidth
          />
        </Grid>
        <Grid item md={6}>
          <FormControl fullWidth>
            <InputLabel>Filtra tu continente</InputLabel>
            <Select
              label="filtra tu continente"
              value={region}
              onChange={handleRegion}
            >
              <MenuItem value="all">Todos los continentes</MenuItem>
              <MenuItem value="Africa">Africa</MenuItem>
              <MenuItem value="Americas">Americas</MenuItem>
              <MenuItem value="Europe">Europe</MenuItem>
              <MenuItem value="Oceania">Oceania</MenuItem>
              <MenuItem value="Asia">Asia</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {countries.length > 0 ? (
          countries.map((country) => (
            <Grid item md={3} xs={12}>
              <Card>
                <CardMedia
                  component="img"
                  height={200}
                  image={country.flags.svg}
                />
                <CardContent>
                  <h4>{country.name.official}</h4>
                  <p>Population: {country.population}</p>
                  <p>Region: {country.region}</p>
                  <p>Capital: {country.capital}</p>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <div className="center loading">
            <CircularProgress />
            <h4>Cargando...</h4>
          </div>
        )}
      </Grid>
    </Container>
  );
}

export default Flags;
