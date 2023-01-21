import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./animeDetail.module.css";
const AnimeDetails = ({ id }) => {
  const [detailedAnime, setDetailedAnime] = useState();
  const [imgLink, setImgLink] = useState("");

  const fetchAnimeData = async () => {
    const response = await axios(`https://api.jikan.moe/v4/anime/${id}`);
    const data = response.data.data;
    const img_link = data.images.jpg.large_image_url;
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
          <img
            src={detailedAnime ? detailedAnime.images.jpg.large_image_url : ""}
          ></img>
        </div>
        <div className={classes.info}>
          <div className={classes.title}>
            <h1>{detailedAnime ? detailedAnime.title : ""}</h1>
          </div>
          <p>{detailedAnime ? detailedAnime.year : ""}</p>
          <h3>Synopsis</h3>
          <p>{detailedAnime ? detailedAnime.synopsis : ""}</p>
        </div>
      </div>
      <div className={classes.bottom_card}></div>
    </div>
  );
};

export default AnimeDetails;
