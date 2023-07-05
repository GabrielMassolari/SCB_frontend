/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionGalpoes, setoptionGalpoes] = useState([]);
    const [optionsFuncionario, setOptionsFuncionarios] = useState([]);
    const [optionsLotes, setOptionsLotes] = useState([]);

    const navigate = useNavigate();

    function carregarGalpoes() {
        axios.get(`/galpoes`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setoptionGalpoes(dados);
                } else if (resp.status === 404) {
                    navigate("/vacinacoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarLotes() {
        axios.get(`/lotes`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.lote
                        };
                    });
                    setOptionsLotes(dados);
                } else if (resp.status === 404) {
                    navigate("/vacinacoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarFuncionarios() {
        axios.get(`/funcionarios`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsFuncionarios(dados);
                } else if (resp.status === 404) {
                    navigate("/vacinacoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarLotes();
        carregarFuncionarios();
        carregarGalpoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="galpao" label="Galpão" placeholder="Selecione o galpão..." error={errors?.galpao} onChange={handleChange} value={inputs?.galpao} options={optionGalpoes} />
            <FormSelect field="funcionario" label="Funcionário" placeholder="Selecione o funcionário..." error={errors?.funcionario} onChange={handleChange} value={inputs?.funcionario} options={optionsFuncionario} />
            <FormSelect field="lote" label="Lote de Vacina" placeholder="Selecione o lote..." error={errors?.lote} onChange={handleChange} value={inputs?.lote} options={optionsLotes} />
            <FormInput type="date" field="dataVacinacao" label="Data Vacinação" placeholder="01/01/2023" error={errors?.dataVacinacao} onChange={handleChange} value={inputs?.dataVacinacao} />
            <FormButtons cancelTarget="/entradas" />
        </form>
    )
}

export default Form

