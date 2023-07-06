import { useState } from "react";
import estilos from "./Listagem.module.css"
import axios from "axios";
import FormInput from "../../components/FormInput";

const Listagem = () => {
  const [relatorio, setRelatorio] = useState([]);
  const [dataInicio, setDataInicio] = useState("");
  const [dataFinal, setDataFinal] = useState("");

  const handleSubmit = () => {
    axios
      .get(`/entradas/getMediaEntradaAnimais/${dataInicio}/${dataFinal}`)
      .then((resp) => {
        setRelatorio(resp.data);
    });
  }

  function handleChageInicio(e) {
    setDataInicio(e.target.value);
  }

  function handleChangeFinal(e) {
    setDataFinal(e.target.value);
  }


  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Média de Recebimento diário de animais por galpão</h1>
      </div>
      <hr />
      <FormInput type="date" field="dataInicio" label="Data Inicío" placeholder="01/01/2023" onChange={handleChageInicio} value={dataInicio}/>
      <FormInput type="date" field="dataFinal" label="Data Final" placeholder="01/02/2023" onChange={handleChangeFinal} value={dataFinal}/>
      <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>Filtrar</button>
      {(
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Galpão</th>
              <th>Média Diária</th>
            </tr>
          </thead>
          <tbody>
            {
              relatorio.map((rel, idx) =>
              <tr key={idx}>
                <td>{rel.nome}</td>
                <td>{rel.media_diaria}</td>
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