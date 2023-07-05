/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [galpao, setGalpao] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/galpoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setGalpao(resp.data);
                } else if (resp.status === 404) {
                    navigate("/galpoes");
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
        axios.delete(`/galpoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Galpão excluído com sucesso!");
                    navigate("/galpoes")
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
            <h1>Exclusão de Galpão</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o galpao {galpao.nome}?</p>
            <FormButtons cancelTarget="/galpoes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;