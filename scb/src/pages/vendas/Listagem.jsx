import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [vendas, setVendas] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarVendas = () => {
    axios
      .get("/vendas")
      .then((resp) => {
        setVendas(resp.data);
        setLoading(false);
      });
  }

  useEffect(() => {
    carregarVendas();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Listagem de Vendas</h1>
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
              <th>Id</th>
              <th>Cliente</th>
              <th>Caminhão</th>
              <th>Preço</th>
              <th>Distância de Entrega</th>
              <th>Data Venda</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              vendas.map((venda) =>
                <tr key={venda.id}>
                  <td>{venda.id}</td>
                  <td>{venda.cliente.nome}</td>
                  <td>{venda.caminhao.modelo}</td>
                  <td>{venda.preco}</td>
                  <td>{venda.distanciaEntrega}</td>
                  <td>{venda.dataVenda}</td>
                  <td>
                    <Link className="btn btn-sm btn-success me-1" to={`/vendas/alterar/${venda.id}`}>
                      <i className="bi bi-pen" title="Alterar"></i>
                    </Link>
                    <Link className="btn btn-sm btn-danger" to={`/vendas/excluir/${venda.id}`}>
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