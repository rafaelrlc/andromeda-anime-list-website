import { useEffect } from "react";
import { useState } from "react";
import api from "../assets/api/api";
import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const Animes = () => {
  const { type } = useParams();
  let typeList = type;
  if (type) {
  } else {
    typeList = "";
  }

  const listingConfig = {
    func: "listingParams",
    type: typeList,
  };

  return (
    <div>
      <AnimeList listingConfig={listingConfig}></AnimeList>
    </div>
  );
};

export default Animes;
