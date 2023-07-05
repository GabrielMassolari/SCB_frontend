import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorEntrada";
import { handleChange, validar } from "../../lib/FormUtils";
import FormEntrada from "../../components/entrada/Form";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

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
        .post("/entradas", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Entrada inserida com sucesso!");
            navigate("/entradas")
          }
        });
      console.log("Enviou dados para a API.");
    });
  }


  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  return (
    <>
      <h1>Cadastro de Entrada de Animais</h1>
      <hr />
      <FormEntrada handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} handleChangeSelect={handleChangeSelect}/>
    </>
  )
}

export default Cadastro;