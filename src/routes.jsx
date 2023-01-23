import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import Animes from "./pages/animes";
import AnimeDetail from "./pages/animeDetail";
import AnimeSearch from "./pages/animeSearch";
import AnimesCategories from "./pages/animesCategories";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Navigate to="/animes/"></Navigate>}></Route>
      <Route path={"/animes"} element={<Animes></Animes>}></Route>
      <Route
        path={"/animes/:type"}
        element={<AnimesCategories></AnimesCategories>}
      ></Route>
      <Route
        path={"/search/:animeName"}
        element={<AnimeSearch></AnimeSearch>}
      ></Route>
      <Route path={"/anime/:id"} element={<AnimeDetail></AnimeDetail>}></Route>
    </Routes>
  );
};

export default AppRoutes;
