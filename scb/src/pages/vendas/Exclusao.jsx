/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [venda, setVenda] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/vendas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setVenda(resp.data);
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
        carregarDados();
    }, [id]);

    function handleDelete() {
        axios.delete(`/vendas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Venda excluída com sucesso!");
                    navigate("/vendas")
                } else {
                    console.log(resp);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h1>Exclusão de Venda</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a venda de id {venda.id} do cliente {venda.cliente?.nome} entregue pelo caminhão {venda.caminhao?.modelo} na data {venda.dataVenda}?</p>
            <FormButtons cancelTarget="/vendas" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;