import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../assets/api/api";
import classes from "./animeDetail.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";
const AnimeDetails = ({ id }) => {
  const [detailedAnime, setDetailedAnime] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchAnimeData = async () => {
    setIsLoading(true);
    const response = await api.get(`/anime/${id}`);
    const data = response.data.data;
    console.log(data);
    setIsLoading(false);
    setDetailedAnime(data);
  };

  useEffect(() => {
    fetchAnimeData();
  }, [id]);

  return (
    <Box>
      {isLoading ? (
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          display={"flex"}
          marginTop={"10rem"}
        >
          <CircularProgress></CircularProgress>
        </Box>
      ) : (
        <div>
          <div className={classes.top_card}>
            <div>
              <img
                src={
                  detailedAnime
                    ? detailedAnime.attributes.posterImage.large
                    : ""
                }
              ></img>
            </div>
            <div className={classes.info}>
              <div className={classes.title}>
                <h1>
                  {detailedAnime ? detailedAnime.attributes.canonicalTitle : ""}
                </h1>
              </div>
              <p>{detailedAnime ? detailedAnime.attributes.createdAt : ""}</p>
              <h3>Synopsis</h3>
              <p>{detailedAnime ? detailedAnime.attributes.synopsis : ""}</p>
            </div>
          </div>
          <div className={classes.bottom_card}></div>
        </div>
      )}
    </Box>
  );
};

export default AnimeDetails;
