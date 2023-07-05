import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { validar, handleChange } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorVacinacao";
import FormVacinacao from "../../components/vacinacoes/Form";

const Alteracao = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const id = useParams().id;
    if (!id) {
        navigate("/vacinacoes");
    }

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/vacinacoes/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    setInputs(resp.data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }

    function handleSubmit(e) {
        e.preventDefault();
        validarLocal(() => {
            axios
                .put(`/vacinacoes/${id}`, inputs)
                .then((resp) => {
                    if (resp.status == 200) {
                        alert("Vacinação alterada com sucesso!");
                        navigate("/vacinacoes")
                    }
                });
        });
    }

    useEffect(() => {
        validarLocal();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputs])

    return (
        <>
            <h1>Alteração de Vacinação</h1>
            <hr />
            <FormVacinacao handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors}/>
        </>
    )
}

export default Alteracao;