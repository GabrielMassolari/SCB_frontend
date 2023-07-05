/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [vacinacao, setVacinacao] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/vacinacoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setVacinacao(resp.data);
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
        carregarDados();
    }, [id]);

    function handleDelete() {
        axios.delete(`/vacinacoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Vacinação excluída com sucesso!");
                    navigate("/vacinacoes")
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
            <h1>Exclusão de Vacinação</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a vacinação de id {vacinacao.id} feito pelo funcionário {vacinacao.funcionario?.nome} na data {vacinacao.dataVacinacao}?</p>
            <FormButtons cancelTarget="/vacinacoes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;