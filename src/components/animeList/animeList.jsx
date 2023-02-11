import React, { Fragment, useEffect, useState } from "react";
import classes from "./animeList.module.css";
import Cards from "../card/card";
import api from "../../api/api";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { Helmet } from "react-helmet";
import SearchInput from "../searchInput";

const AnimeList = ({ listingConfig }) => {
  const [animesDisplay, setAnimesDisplay] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(10);

  const handleChange = (event, value) => {
    window.scrollTo(0, 0);
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

    try {
      const response = await api.get("/anime", {
        params: fetchParams,
      });
      const data = response.data.data;
      console.log(data);
      const n_pages = Math.round(response.data.meta.count / 20);
      setPageCount(n_pages);
      setIsLoading(false);
      setAnimesDisplay(data);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setAnimesDisplay([]);
    }
  };

  useEffect(() => {
    setAnimesDisplay([]);
    fetchAnimes(20, page * 10 - 10);
  }, [listingConfig, page]);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{listingConfig.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className={classes.container}>
        <h2 className={classes.list__title}>ANIMES</h2>

        <ul className={classes.list__cards}>
          {isLoading && <CircularProgress />}
          {animesDisplay.map((anime) => (
            <Cards anime={anime} key={anime.id} />
          ))}
        </ul>
      </div>
      {!isLoading && (
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          marginTop={"3rem"}
          marginBottom={"2rem"}
          color={"white"}
        >
          <Stack spacing={2}>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handleChange}
              color={"primary"}
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "white",
                padding: "0.25rem",
                margin: "0",
              }}
            />
          </Stack>
        </Box>
      )}
    </Fragment>
  );
};

export default AnimeList;
