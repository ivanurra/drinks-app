import React, { Fragment } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
