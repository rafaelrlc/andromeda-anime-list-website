import { useState, useEffect } from "react";
import axios from "axios";
import api from "../../api/api";
import classes from "./animeDetail.module.css";
const AnimeDetails = ({ animeData }) => {
  const [detailedAnime, setDetailedAnime] = useState();
  const [imgLink, setImgLink] = useState("");

  const fetchAnimeData = async () => {
    console.log(id);
    const response = await api.get(`${id}`);
    const data = response.data.data;
    const img_link = data.attributes.posterImage.large;
    console.log(data);
    setImgLink(img_link);
    setDetailedAnime(data);
  };

  useEffect(() => {
    //fetchAnimeData();
  }, [id]);

  return (
    <div>
      <div className={classes.top_card}>
        <div>
          <img src={animeData.attributes.posterImage.large}></img>
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <h1>{animeData.attributes.canonicalTitle}</h1>
          </div>
          <p>{animeData.attributes.createdAt}</p>
          <h3>Synopsis</h3>
          <p>{animeData.attributes.synopsis}</p>
        </div>
      </div>
      <div className={classes.bottom_card}></div>
    </div>
  );
};

export default AnimeDetails;
