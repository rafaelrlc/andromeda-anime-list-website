import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const SearchInput = () => {
  const navigate = useNavigate();
  const [animeSearch, setAnimeSearch] = useState("");

  const searchAnime = (e) => {
    e.preventDefault();

    if (animeSearch === "") {
      return;
    }

    setAnimeSearch("");

    navigate(`/search/${animeSearch}`);
  };

  return (
    <form onSubmit={searchAnime}>
      <input></input>
    </form>
  );
};

export default SearchInput;
