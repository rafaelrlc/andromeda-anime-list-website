import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import Animes from "./pages/animes";
import AnimeDetail from "./pages/animeDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"*"} element={<Navigate to="/animes/"></Navigate>}></Route>
      <Route path={"/animes"} element={<Animes></Animes>}></Route>
      <Route path={"/animes/:type"} element={<Animes></Animes>}></Route>
      <Route path={"/anime/:id"} element={<AnimeDetail></AnimeDetail>}></Route>
    </Routes>
  );
};

export default AppRoutes;
