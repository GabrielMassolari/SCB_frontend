import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { validar, handleChange } from "../../lib/FormUtils";
import validator from "../../lib/ValidatorEntrada";
import FormEntrada from "../../components/entrada/Form";

const Alteracao = () => {
    const [inputs, setInputs] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const id = useParams().id;
    if (!id) {
        navigate("/entradas");
    }

    function carregarDados() {
        // setInputs({ ...inputs, id: id });
        axios.get(`/entradas/${id}`)
            .then((resp) => {
                if (resp.status === 200) {
                    let data = resp.data;
                    data["galpao"] = data.galpaoId;
                    data["funcionario"] = data.funcionarioId
                    setInputs(data);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    function validarLocal(callbackAction) {
        validar(callbackAction, inputs, setErrors, validator);
    }

    function handleChangeLocal(e) {
        handleChange(e, setInputs, inputs);
    }

    function handleChangeSelect(item) {
        const data = item.map((obj) => {
          return {
            id: obj.value 
          }
        })
        setInputs((prevInputs) => ({ ...prevInputs, ['animais']: data }));
      }

    function handleSubmit(e) {
        e.preventDefault();
        validarLocal(() => {
            axios
                .put(`/execucoes/${id}`, inputs)
                .then((resp) => {
                    if (resp.status == 200) {
                        alert("Entrada alterada com sucesso!");
                        navigate("/entradas")
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
            <h1>Alteração de Entrada de Animais</h1>
            <hr />
            <FormEntrada handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} handleChangeSelect={handleChangeSelect}/>
        </>
    )
}

export default Alteracao;