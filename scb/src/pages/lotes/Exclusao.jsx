/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [lote, setLote] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/lotes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setLote(resp.data);
                } else if (resp.status === 404) {
                    navigate("/lotes");
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
        axios.delete(`/lotes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Lote excluído com sucesso!");
                    navigate("/lotes")
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
            <h1>Exclusão de Lote</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o lote {lote.lote}?</p>
            <FormButtons cancelTarget="/lotes" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;