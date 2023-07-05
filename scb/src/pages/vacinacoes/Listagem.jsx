import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [vacinacoes, setVacinacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarVacinacoes = () => {
    axios
      .get("/vacinacoes")
      .then((resp) => {
        setVacinacoes(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarVacinacoes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Vacinações</h1>
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
              vacinacoes.map((vacinacao) =>
                <tr key={vacinacao.id}>
                  <td>{vacinacao.lote.lote}</td>
                  <td>{vacinacao.funcionario.nome}</td>
                  <td>{vacinacao.dataVacinacao}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/vacinacoes/alterar/${vacinacao.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/vacinacoes/excluir/${vacinacao.id}`}>
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