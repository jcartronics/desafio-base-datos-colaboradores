import React from "react";

const Nav = ({filtro, filtrarColaboradores}) => {
  return (
    <div>
      <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Buscador de Colaboradores</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar un Colaborador"
                aria-label="Search"
                value={filtro}
                onChange={filtrarColaboradores}
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
