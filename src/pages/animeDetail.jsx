import AnimeDetails from "../components/animeDetail/animeDetail";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  return <AnimeDetails id={id}></AnimeDetails>;
};

export default AnimeDetail;
