import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [caminhaos, setCaminhaos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarCaminhaos = () => {
    axios
      .get("/caminhoes")
      .then((resp) => {
        setCaminhaos(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarCaminhaos();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de caminhoes</h1>
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
              <th>Modelo</th>
              <th>Ano</th>
              <th>Marca</th>
              <th>Quilometragem</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              caminhaos.map((caminhao) =>
                <tr key={caminhao.id}>
                  <td>{caminhao.id}</td>
                  <td>{caminhao.modelo}</td>
                  <td>{caminhao.ano}</td>
                  <td>{caminhao.marca}</td>
                  <td>{caminhao.quilometragem}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/caminhoes/alterar/${caminhao.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/caminhoes/excluir/${caminhao.id}`}>
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