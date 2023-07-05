import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";

const Listagem = () => {
  const [relatorio, setRelatorio] = useState({});

  const carregarDados = () => {
    axios
      .get("/entrada/getTotalAnimaisMesAtual")
      .then((resp) => {
        setRelatorio(resp.data);
      });
  }

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Total de Animais recebidos no mês atual</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
      </div>
      <hr />
      {(
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Total Animais</th>
            </tr>
          </thead>
          <tbody>
            {
                <tr>
                  <td>{relatorio[0].total_animais}</td>
                </tr>
            }
          </tbody>
        </table>
      )}
    </>
  )
}

export default Listagem;