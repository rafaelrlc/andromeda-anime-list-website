import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../assets/api/api";
import classes from "./animeDetail.module.css";
const AnimeDetails = ({ id }) => {
  console.log(id);
  const [detailedAnime, setDetailedAnime] = useState();
  const [imgLink, setImgLink] = useState("");

  const fetchAnimeData = async () => {
    const response = await api.get(`/anime/${id}`);
    const data = response.data.data;
    const img_link = data.attributes.posterImage.large;
    console.log(data);
    setImgLink(img_link);
    setDetailedAnime(data);
  };

  useEffect(() => {
    fetchAnimeData();
  }, [id]);

  return (
    <div>
      <div className={classes.top_card}>
        <div>
          <img src={imgLink}></img>
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
  );
};

export default AnimeDetails;
