import React, { Fragment, useEffect, useState } from "react";
import classes from "./animeList.module.css";
import Cards from "../card/card";
import api from "../../api/api";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AnimeList = ({ type }) => {
  const [animesDisplay, setAnimesDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  let pageTitle = "ANIMES";

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchAnimes = async (itemcount, limit) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://kitsu.io/api/edge/anime?page[limit]=${limit}&page[offset]=${itemcount}`
    );

    const data = response.data.data;
    console.log(data);
    setAnimesDisplay(data);
    setIsLoading(false);
  };

  const fetchData = async () => {
    setIsLoading(true);

    const response = await api.get("", {
      params: {
        "filter[text]": "naruto",
        "page[limit]": "20",
        "page[offset]": "0",
      },
    });

    const data = response.data.data;
    console.log(data);
    setAnimesDisplay(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(0, 20);
  }, [type]);

  return (
    <Fragment>
      <div className={classes.movie__list}>
        <h2 className={classes.list__title}> {pageTitle}</h2>
        <div className={classes.list__cards}>
          {animesDisplay.map((anime) => (
            <Cards anime={anime} isLoading={isLoading} key={anime.id} />
          ))}
        </div>
      </div>
      <Stack spacing={2}>
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          color={`primary`}
        />
      </Stack>
    </Fragment>
  );
};

export default AnimeList;
