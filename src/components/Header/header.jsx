import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa";
const Header = () => {
  const [animeSearch, setAnimeSearch] = useState("");

  const searchAnime = (e) => {
    e.preventDefault();

    if (animeSearch === "") {
      return;
    }
  };
  return (
    <nav className="header">
      <div className="headerLeft">
        <div className="logo">
          <Link to="/">
            <img
              className="header__icon"
              src="https://cdn.discordapp.com/attachments/886688344363388958/1066155147878735923/447-4477229_winter-anime-girl-icon-hd-png-download.png"
            />
          </Link>
          <h1>ANDROMEDA</h1>
        </div>

        <Link to="animes/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="animes/trending" style={{ textDecoration: "none" }}>
          <span>Trending</span>
        </Link>
        <Link to="animes/upcoming" style={{ textDecoration: "none" }}>
          <span>Recent Episodes</span>
        </Link>
      </div>
      <form className="input_search" onSubmit={searchAnime}>
        <input placeholder="Buscar..."></input>
        <button type="submit">
          <FaSistrix></FaSistrix>
        </button>
      </form>
    </nav>
  );
};

export default Header;
