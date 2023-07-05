import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [galpoes, setGalpoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarGalpoes = () => {
    axios
      .get("/galpoes")
      .then((resp) => {
        setGalpoes(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarGalpoes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Galpões</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
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
              <th>Nome</th>
              <th>Capacidade</th>
              <th>Limite Diário</th>
              <th>Maternidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              galpoes.map((galpao) =>
                <tr key={galpao.id}>
                  <td>{galpao.nome}</td>
                  <td>{galpao.capacidade}</td>
                  <td>{galpao.limiteDiario}</td>
                  <td>{galpao.maternidade ? "Sim" : "Não" }</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/galpoes/alterar/${galpao.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/galpoes/excluir/${galpao.id}`}>
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