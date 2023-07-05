import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [lotes, setLotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarLotes = () => {
    axios
      .get("/lotes")
      .then((resp) => {
        setLotes(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarLotes();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Lotes</h1>
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
              <th>Id</th>
              <th>Nome</th>
              <th>Data Vencimento</th>
              <th>Quantidade de Doses</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              lotes.map((lote) =>
                <tr key={lote.id}>
                  <td>{lote.id}</td>
                  <td>{lote.lote}</td>
                  <td>{lote.dataVencimento}</td>
                  <td>{lote.quantidadeDoses}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/lotes/alterar/${lote.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/lotes/excluir/${lote.id}`}>
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