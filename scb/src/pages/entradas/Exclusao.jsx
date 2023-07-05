/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [entrada, setEntrada] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/entradas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setEntrada(resp.data);
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

    useEffect(() => {
        carregarDados();
    }, [id]);

    function handleDelete() {
        axios.delete(`/entradas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Entrada excluída com sucesso!");
                    navigate("/entradas")
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
            <h1>Exclusão de Entrada de Animais</h1>
            <hr />
            <p className="lead">Deseja realmente excluir a entrade de id {entrada.id} feito pelo funcionário {entrada.funcionario?.nome} na data {entrada.dataEntrada}?</p>
            <FormButtons cancelTarget="/entradas" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;