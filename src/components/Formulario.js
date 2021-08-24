import React, { useContext } from "react";
import { CategoriasContext } from "../context/CategoriaContext";

const Formulario = () => {
  const { categorias } = useContext(CategoriasContext);

  return (
    <form className="col-12">
      <fieldset className="text-center">
        <legend>Find drinks by category or ingredient</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Find by ingredient"
          />
        </div>
        <div className="col-md-4">
          <select name="categoria" className="form-control">
            <option value="">--Select Category--</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            className="btn btn-block btn-primary"
            type="submit"
            value="Go for a drink!"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
