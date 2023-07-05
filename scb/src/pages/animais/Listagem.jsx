import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [animais, setAnimais] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarAnimais = () => {
    axios
      .get("/animais")
      .then((resp) => {
        setAnimais(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarAnimais();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Animais</h1>
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
              <th>Peso</th>
              <th>Data Nascimento</th>
              <th>Data Vacinacao</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              animais.map((animal) =>
                <tr key={animal.id}>
                  <td>{animal.nome}</td>
                  <td>{animal.peso}</td>
                  <td>{animal.dataNascimento}</td>
                  <td>{animal.dataVacinacao}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/animais/alterar/${animal.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/animais/excluir/${animal.id}`}>
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