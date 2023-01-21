import { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";
import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const Animes = () => {
  const { type } = useParams();
  console.log(type);
  return (
    <div>
      <AnimeList type={type}></AnimeList>
    </div>
  );
};

export default Animes;
