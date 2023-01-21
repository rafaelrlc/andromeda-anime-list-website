import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/header";
import Animes from "./pages/animes";
import AnimeDetail from "./pages/animeDetail";
import AppRoutes from "./routes";
import { useEffect } from "react";
import * as React from "react";
import api from "./api/api";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </Fragment>
  );
}

export default App;
