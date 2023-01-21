import { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";
import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const Animes = () => {
  const { type } = useParams();
  let typeList = type;
  if (type) {
  } else {
    typeList = "";
  }

  return (
    <div>
      <AnimeList type={typeList}></AnimeList>
    </div>
  );
};

export default Animes;
