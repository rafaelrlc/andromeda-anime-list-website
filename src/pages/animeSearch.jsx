import { useEffect } from "react";
import { useState } from "react";
import api from "../api/api";
import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const AnimeSearch = () => {
  const animeName = useParams();

  const listingConfig = {
    func: "search",
    animeSearch: animeName.animeName,
    title: "Search All - Andromeda",
  };

  return (
    <div>
      <AnimeList listingConfig={listingConfig}></AnimeList>
    </div>
  );
};

export default AnimeSearch;
