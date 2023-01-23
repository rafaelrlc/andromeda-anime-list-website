import AnimeList from "../components/animeList/animeList";
import { useParams } from "react-router-dom";

const AnimesCategories = () => {
  const { type } = useParams();

  const listingConfig = {
    func: "listingParams",
    type: type,
    title: "Andromeda - Anime Website",
  };

  return (
    <div>
      <AnimeList listingConfig={listingConfig}></AnimeList>
    </div>
  );
};

export default AnimesCategories;
