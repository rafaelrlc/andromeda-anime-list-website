import { useEffect } from "react";
import { useState } from "react";
import api from "../assets/api/api";
import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const AnimeSearch = () => {
  const animeName = useParams();

  const listingConfig = {
    func: "search",
    animeSearch: animeName.animeName,
  };

  return (
    <div>
      <AnimeList listingConfig={listingConfig}></AnimeList>
    </div>
  );
};

export default AnimeSearch;
