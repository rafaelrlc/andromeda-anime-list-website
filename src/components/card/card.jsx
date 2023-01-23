import classes from "./card.module.css";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { AiFillStar } from "react-icons/ai";

const Cards = ({ anime }) => {
  return (
    <li>
      <Link
        to={`/anime/${anime.id}`}
        style={{ textDecoration: "none", color: "white" }}
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
              <div className={classes.animeDate}>
                {anime ? anime.attributes.startDate.slice(0, 4) : ""}
              </div>
              <div className={classes.rating}>
                <h5>
                  {anime ? anime.attributes.averageRating.slice(0, 4) : ""}
                </h5>
                <AiFillStar size={15}></AiFillStar>
              </div>
            </div>
            <div className="card__description">
              {anime ? anime.attributes.synopsis.slice(0, 90) + "..." : ""}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default Cards;
