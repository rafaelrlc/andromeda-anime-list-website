import AnimeDetails from "../components/animeDetail/animeDetail";
import { useParams } from "react-router-dom";

const AnimeDetail = () => {
  const { id } = useParams();
  console.log(id);
  return <AnimeDetails id={id}></AnimeDetails>;
};

export default AnimeDetail;
