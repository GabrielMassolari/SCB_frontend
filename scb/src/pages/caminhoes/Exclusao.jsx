/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [caminhao, setCaminhao] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/caminhoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setCaminhao(resp.data);
                } else if (resp.status === 404) {
                    navigate("/caminhoes");
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
        axios.delete(`/caminhoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Caminhao excluído com sucesso!");
                    navigate("/caminhoes")
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
            <h1>Exclusão de Caminhao</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o caminhao {caminhao.modelo}?</p>
            <FormButtons cancelTarget="/caminhoes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;