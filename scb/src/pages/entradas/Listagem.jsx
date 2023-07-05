import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [entradas, setEntradas] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarEntradas = () => {
    axios
      .get("/entradas")
      .then((resp) => {
        setEntradas(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarEntradas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Entradas</h1>
        <Link className="btn btn-primary" to="cadastrar">Nova</Link>
      </div>
      <hr />
      {loading &&
        (<div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>)}
      {!loading && (
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Galpão</th>
              <th>Funcionário</th>
              <th>Data</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              entradas.map((entrada) =>
                <tr key={entrada.id}>
                  <td>{entrada.galpaoEntrada.nome}</td>
                  <td>{entrada.funcionario.nome}</td>
                  <td>{entrada.dataEntrada}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/entradas/alterar/${entrada.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/entradas/excluir/${entrada.id}`}>
                      <i className="bi bi-trash" title="Excluir"></i>
                    </Link>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default Listagem;