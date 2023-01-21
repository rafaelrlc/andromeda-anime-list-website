import { Fragment, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import Animes from "./pages/animes";
import AnimeDetail from "./pages/animeDetail";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <Routes>
        <Route path={"*"} element={<Navigate to="/anime"></Navigate>}></Route>
        <Route path={"/:type"} element={<Animes></Animes>}></Route>
        <Route
          path={"/:type/:id"}
          element={<AnimeDetail></AnimeDetail>}
        ></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
