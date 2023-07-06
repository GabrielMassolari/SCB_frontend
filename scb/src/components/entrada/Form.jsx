/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const Form = ({ handleSubmit, handleChange, errors, inputs, handleChangeSelect }) => {
    const [optionGalpoes, setoptionGalpoes] = useState([]);
    const [optionsAnimais, setOptionsAnimais] = useState([]);
    const [optionsFuncionario, setOptionsFuncionarios] = useState([]);

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
                    navigate("/entradas");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarAnimais() {
        axios.get(`/animais`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsAnimais(dados);
                } else if (resp.status === 404) {
                    navigate("/entradas");
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
                    navigate("/execucoes");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarAnimais();
        carregarFuncionarios();
        carregarGalpoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="galpao" label="Galpão" placeholder="Selecione o galpão..." error={errors?.galpao} onChange={handleChange} value={inputs?.galpao} options={optionGalpoes} />
            <FormSelect field="funcionario" label="Funcionário" placeholder="Selecione o funcionário..." error={errors?.funcionario} onChange={handleChange} value={inputs?.funcionario} options={optionsFuncionario} />
            <FormInput type="date" field="dataEntrada" label="Data Entrada" placeholder="01/01/2023" error={errors?.dataEntrada} onChange={handleChange} value={inputs?.dataEntrada} />
            <Select
                isMulti
                options={optionsAnimais}
                onChange={handleChangeSelect}
                className="mt-3"
                name="animais"
                id="animais"
                isClearable={true}
                isSearchable={true}
                isDisabled={false}
                isLoading={false}
                isRtl={false}
                closeMenuOnSelect={false}
            />
            <FormButtons cancelTarget="/entradas" />
        </form>
    )
}

export default Form

