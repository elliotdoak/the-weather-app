import React from "react";
import { makeStyles } from "@material-ui/core";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  search: {
    marginTop: "100px",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 100,
    fontSize: "16px",
    color: "#6f838c",
  },
}));

function Search() {
  const [citySearched, setCitySearched] = useState("");
  const { search } = useStyles();

  const [getWeather, { loading, data, error }] = useLazyQuery(
    GET_WEATHER_QUERY,
    {
      variables: { name: citySearched },
    }
  );
  if (loading) return <h1>Be Patient...</h1>;
  if (error) return <h1>Error found</h1>;
  if (data) {
    console.log(data);
  }

  return (
    <div className={search}>
      <h1>Where should we look?</h1>
      <input
        type="text"
        placeholder="City name..."
        onChange={(event) => {
          setCitySearched(event.target.value);
        }}
      />
      <button onClick={() => getWeather()}>Search</button>
      <div className="weather">
        {data && (
          <>
            <h1>City:{data.getCityByName.name}</h1>
            <h1>
              Temperature:
              {(
                data.getCityByName.weather.temperature.actual - 273.15
              ).toPrecision(3) + " degrees"}
            </h1>
            <h1>
              Description: {data.getCityByName.weather.summary.description}
            </h1>
            <h1>Wind: {data.getCityByName.weather.wind.speed + "mph"}</h1>
          </>
        )}
      </div>
    </div>
  );
}

export default Search;
