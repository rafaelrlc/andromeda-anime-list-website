import { Fragment } from "react";
import Header from "./components/Header/header";
import AppRoutes from "./routes";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <AppRoutes></AppRoutes>
    </Fragment>
  );
}

export default App;
