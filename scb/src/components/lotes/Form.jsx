/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionsVacinas, setOptionsVacinas] = useState([]);

    const navigate = useNavigate();

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
              }else if (resp.status === 404) {
                navigate("/entradas");
            } else {
                console.log(resp);
            }
          })
          .catch((error) => {
              console.log(error);
          });
    }
  
    useEffect(() => {
        carregarVacinas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="lote" label="Lote" placeholder="Nome do Lote" error={errors?.lote} onChange={handleChange} value={inputs?.lote} />
            <FormInput type="date" field="dataVencimento" label="DataVencimento" placeholder="01/01/2023" error={errors?.dataVencimento} onChange={handleChange} value={inputs?.dataVencimento} />
            <FormInput type="number" field="quantidadeDoses" label="Doses" placeholder="3" error={errors?.quantidadeDoses} onChange={handleChange} value={inputs?.quantidadeDoses} />
            <FormSelect field="vacinaid" label="Vacina" placeholder="Selecione a vacina..." error={errors?.vacinaid} onChange={handleChange} value={inputs?.vacinaid} options={optionsVacinas} />
            <FormButtons cancelTarget="/lotes" />
        </form>
    )
}

export default Form

