import React, { useEffect, useState } from "react";
import classes from "./animeList.module.css";
import Cards from "../card/card";
import api from "../../api/api";
import axios from "axios";

const AnimeList = ({ type }) => {
  const [animesDisplay, setAnimesDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  let pageTitle = "ANIMES";
  let typeList = "";

  if (type === "animes") {
    console.log();
    typeList = "/";
    pageTitle = "ANIMES";
  }

  const fetchPopularAnimes = async () => {
    setIsLoading(true);
    const response = await api.get(`${typeList}`);
    const data = response.data.data;
    console.log(data);
    setAnimesDisplay(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPopularAnimes();
  }, [type]);

  return (
    <div className={classes.movie__list}>
      <h2 className={classes.list__title}> {pageTitle}</h2>
      <div className={classes.list__cards}>
        {animesDisplay.map((anime) => (
          <Cards anime={anime} isLoading={isLoading} key={anime.mal_id} />
        ))}
      </div>
    </div>
  );
};

export default AnimeList;
