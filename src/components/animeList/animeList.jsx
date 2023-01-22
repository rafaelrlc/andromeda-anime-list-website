import React, { Fragment, useEffect, useState } from "react";
import classes from "./animeList.module.css";
import Cards from "../card/card";
import api from "../../assets/api/api";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const AnimeList = ({ listingConfig }) => {
  const [animesDisplay, setAnimesDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchAnimes = async (limit, offset) => {
    let fetchParams = {
      "filter[text]": listingConfig?.animeSearch,
      "filter[categories]": listingConfig?.animeCategories,
      "page[limit]": limit,
      "page[offset]": offset,
    };

    setIsLoading(true);

    const response = await api.get("/anime", {
      params: fetchParams,
    });

    const data = response.data.data;
    console.log(data);
    setAnimesDisplay(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAnimes(20, 0);
  }, [listingConfig]);

  return (
    <Fragment>
      <div className={classes.movie__list}>
        <h2 className={classes.list__title}>ANIMES</h2>
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
