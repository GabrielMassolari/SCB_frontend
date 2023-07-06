import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorVacinacao";
import { handleChange, validar } from "../../lib/FormUtils";
import FormVacinacao from "../../components/vacinacoes/Form";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [errorRn, setErrorRn] = useState("");
  const navigate = useNavigate();

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
        .post("/vacinacoes", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Vacinacao inserida com sucesso!");
            navigate("/vacinacoes")
          }
        }).catch((error) => {
          setErrorRn(error.response.data.message);
          //alert(error.response.data.message)
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
      <h1>Cadastro de Vacinação</h1>
      <hr />
      <FormVacinacao handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
      {errorRn && 
        <div className="alert alert-danger mt-3" role="alert">
          {errorRn}
        </div>
      }
    </>
  )
}

export default Cadastro;