import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorVenda";
import { handleChange, validar } from "../../lib/FormUtils";
import FormVenda from "../../components/vendas/Form";

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
        .post("/vendas", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            alert("Venda inserida com sucesso!");
            navigate("/vendas")
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
      <h1>Cadastro de Venda</h1>
      <hr />
      <FormVenda handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
      {errorRn && 
        <div className="alert alert-danger mt-3" role="alert">
          {errorRn}
        </div>
      }
    </>
  )
}

export default Cadastro;