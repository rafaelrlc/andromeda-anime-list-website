import classes from "./card.module.css";
import { Link } from "react-router-dom";

const Cards = ({ anime }) => {
  return (
    <>
      <Link
        to={`/anime/${anime.mal_id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <div className={classes.cards}>
          <img
            className={classes.cards__img}
            src={anime.images.jpg.image_url}
          />
          <div className={classes.cards__overlay}>
            <div className={classes.card__title}>
              {anime ? anime.title : ""}
            </div>
            <div className={classes.card__runtime}>
              {anime ? anime.year : ""}
              <span className="card__rating">{anime ? anime.score : ""}</span>
            </div>
            <div className="card__description">
              {anime ? anime.synopsis.slice(0, 100) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
