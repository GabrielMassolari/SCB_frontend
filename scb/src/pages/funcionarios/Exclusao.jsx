/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [funcionario, setFuncionario] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/funcionarios/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setFuncionario(resp.data);
                } else if (resp.status === 404) {
                    navigate("/funcionarios");
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
        axios.delete(`/funcionarios/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Funcionario excluído com sucesso!");
                    navigate("/funcionarios")
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
            <h1>Exclusão de Funcionario</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o funcionario {funcionario.nome}?</p>
            <FormButtons cancelTarget="/funcionarios" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;