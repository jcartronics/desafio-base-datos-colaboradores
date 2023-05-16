import { BaseColaboradores } from "../baseColaboradores";
import { useState } from "react";
import Nav from "./Nav";

const Colaborador = () => {
  const [colaborador, setColaborador] = useState("");
  const [correo, setCorreo] = useState("");
  const [listaColaboradores, setListaColaboradores] =
    useState(BaseColaboradores);
  const [filtro, setFiltro] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaColaboradores([
      ...listaColaboradores,
      { nombre: colaborador, correo: correo },
    ]);
    setColaborador("");
    setCorreo("");
    console.log("Formulario enviado");
  };

  const capturaNombre = (e) => {
    setColaborador(e.target.value);
    console.log(e.target.value);
  };

  const capturaCorreo = (e) => {
    setCorreo(e.target.value);
    console.log(e.target.value);
  };

  const capturaFiltro = (e) => {
    setFiltro(e.target.value);
    console.log(e.target.value);
  };

  const colaboradoresFiltrados = listaColaboradores.filter((colaborador) =>
    colaborador.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

  return (
    <div>
      <Nav filtro={filtro} filtrarColaboradores={capturaFiltro} />
      <form onSubmit={enviarFormulario}>
        <div className="mb-3">
          <label className="form-label">Nombre del colaborador:</label>
          <input
            className="form-control"
            name="nombreColaborador"
            onChange={capturaNombre}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Correo del colaborador:</label>
          <input
            className="form-control"
            name="correoColaborador"
            onChange={capturaCorreo}
          />
        </div>
        <button className="btn btn-primary">Agregar Colaborador</button>
      </form>
      <h1>Listado de Colaboradores</h1>
      <ul>
        {colaboradoresFiltrados.map((colaborador, index) => (
          <li key={index}>
            {colaborador.nombre} - {colaborador.correo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Colaborador;
