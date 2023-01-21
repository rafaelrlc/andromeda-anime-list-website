import classes from "./card.module.css";
import { Link } from "react-router-dom";

const Cards = ({ anime }) => {
  return (
    <>
      <Link
        to={`/anime/${anime.id}`}
        style={{ textDecoration: "none", color: "white" }}
        data={anime}
      >
        <div className={classes.cards}>
          <img
            className={classes.cards__img}
            src={anime.attributes.posterImage.large}
          />
          <div className={classes.cards__overlay}>
            <div className={classes.card__title}>
              {anime ? anime.attributes.canonicalTitle : ""}
            </div>
            <div className={classes.card__runtime}>
              {anime ? anime.attributes.createdAt : ""}
              <span className="card__rating">
                {anime ? anime.attributes.averageRating : ""}
              </span>
            </div>
            <div className="card__description">
              {anime ? anime.attributes.synopsis.slice(0, 70) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cards;
