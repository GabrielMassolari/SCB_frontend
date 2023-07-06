import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import estilos from "./Listagem.module.css"
import axios from "axios";
import FormSelect from "../../components/FormSelect";

const Listagem = () => {
  const [relatorio, setRelatorio] = useState([]);
  const [vacinaId, setVacinaId] = useState("")
  const [optionsVacinas, setOptionsVacinas] = useState([])

  function carregarVacinas() {
    axios.get(`/vacinas`)
        .then((resp) => {
            if (resp.status === 200) {
                const dados = resp.data.map((obj) => {
                    return {
                        value: obj.id,
                        label: obj.nome
                    };
                });
                setOptionsVacinas(dados);
            }
        })
        .catch((error) => {
            console.log(error);
        });
  }

  const handleSubmit = () => {
    axios
      .get(`/lotes/getLotesProximosVencer/${vacinaId}`)
      .then((resp) => {
        setRelatorio(resp.data);
    });
  }

  function handleChange(e) {
    setVacinaId(e.target.value);
  }

  useEffect(() => {
    carregarVacinas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>Lotes mais proximos de proximos de vencer de acordo com a vacina</h1>
        <Link className="btn btn-primary" to="cadastrar">Novo</Link>
      </div>
      <hr />
      <FormSelect field="vacina" label="Vacina" placeholder="Selecione a vacina..." onChange={handleChange} value={vacinaId} options={optionsVacinas} />
      <button type="button" className="btn btn-success mt-3" onClick={handleSubmit}>Filtrar</button>
      {(
        <table className={`table table-striped ${estilos.tabela}`}>
          <thead>
            <tr>
              <th>Lote</th>
              <th>Data de Vencimento</th>
            </tr>
          </thead>
          <tbody>
            {
              relatorio.map((rel, idx) =>
              <tr key={idx}>
                <td>{rel.lote}</td>
                <td>{rel.data_vencimento}</td>
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