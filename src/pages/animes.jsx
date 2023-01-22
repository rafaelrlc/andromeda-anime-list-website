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
    title: "Andromeda - Anime Website",
  };

  return (
    <div>
      <AnimeList listingConfig={listingConfig}></AnimeList>
    </div>
  );
};

export default Animes;
