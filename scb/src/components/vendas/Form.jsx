/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import FormButtons from "../FormButtons";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    const [optionGalpoes, setoptionGalpoes] = useState([]);
    const [optionsCaminhoes, setOptionsCaminhoes] = useState([]);
    const [optionsClientes, setOptionsClientes] = useState([]);

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
                    navigate("/vendas");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarCaminhoes() {
        axios.get(`/caminhoes`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.modelo
                        };
                    });
                    setOptionsCaminhoes(dados);
                } else if (resp.status === 404) {
                    navigate("/vendas");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function carregarClientes() {
        axios.get(`/clientes`)
            .then((resp) => {
                if (resp.status === 200) {
                    const dados = resp.data.map((obj) => {
                        return {
                            value: obj.id,
                            label: obj.nome
                        };
                    });
                    setOptionsClientes(dados);
                } else if (resp.status === 404) {
                    navigate("/vendas");
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        carregarCaminhoes();
        carregarClientes();
        carregarGalpoes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormSelect field="cliente" label="Cliente" placeholder="Selecione o cliente..." error={errors?.cliente} onChange={handleChange} value={inputs?.cliente} options={optionsClientes} />
            <FormSelect field="galpao" label="Galpão" placeholder="Selecione o galpão..." error={errors?.galpao} onChange={handleChange} value={inputs?.galpao} options={optionGalpoes} />
            <FormSelect field="caminhao" label="Caminhão" placeholder="Selecione o caminhão..." error={errors?.caminhao} onChange={handleChange} value={inputs?.caminhao} options={optionsCaminhoes} />
            <FormInput type="number" field="distanciaEntrega" label="Distância Entrega" placeholder="01/01/2023" error={errors?.distanciaEntrega} onChange={handleChange} value={inputs?.distanciaEntrega} />
            <FormInput type="number" field="preco" label="Preço" placeholder="12000" error={errors?.preco} onChange={handleChange} value={inputs?.preco} />
            <FormInput type="date" field="dataVenda" label="Data Venda" placeholder="01/01/2023" error={errors?.dataVenda} onChange={handleChange} value={inputs?.dataVenda} />

            <FormButtons cancelTarget="/vendas" />
        </form>
    )
}

export default Form

