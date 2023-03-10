import React from "react";
import classes from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
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
    <nav className={classes.header}>
      <div className={classes.headers}>
        <div className={classes.headerLeft}>
          <div className={classes.logo}>
            <Link to="/">
              <img
                className={classes.header__icon}
                src="https://cdn.discordapp.com/attachments/886688344363388958/1066155147878735923/447-4477229_winter-anime-girl-icon-hd-png-download.png"
              />
            </Link>
            <h1>ANDROMEDA</h1>
          </div>
          <div className={classes.options}>
            <Link to="animes/" style={{ textDecoration: "none" }}>
              <span>Home</span>
            </Link>
            <Link to="animes/trending" style={{ textDecoration: "none" }}>
              <span>Trending</span>
            </Link>
            <Link to="animes/upcoming" style={{ textDecoration: "none" }}>
              <span>Upcoming</span>
            </Link>
          </div>
        </div>
        <div className={classes.headerRight}>
          <form className={classes.input_search} onSubmit={searchAnime}>
            <input
              placeholder="Buscar..."
              onChange={(e) => setAnimeSearch(e.target.value)}
              value={animeSearch}
            ></input>
            <button type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
