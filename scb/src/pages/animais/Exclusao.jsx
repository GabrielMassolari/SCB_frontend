/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import FormButtons from "../../components/FormButtons";
import axios from "axios";
import { useEffect, useState } from "react";

const Exclusao = () => {
    const [animal, setAnimal] = useState({});
    const id = useParams().id;

    const navigate = useNavigate();

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/animais/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setAnimal(resp.data);
                } else if (resp.status === 404) {
                    navigate("/animais");
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
        axios.delete(`/animais/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    alert("Animal excluído com sucesso!");
                    navigate("/animais")
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
            <h1>Exclusão de Animal</h1>
            <hr />
            <p className="lead">Deseja realmente excluir o animal {animal.nome}?</p>
            <FormButtons cancelTarget="/animais" negativeTitle="Não" positiveTitle="Sim" positiveAction={handleDelete} buttonType="button" />
        </>
    )
}

export default Exclusao;