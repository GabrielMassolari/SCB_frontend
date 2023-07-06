import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorCliente";
import { handleChange, validar } from "../../lib/FormUtils";
import FormCliente from "../../components/clientes/Form";

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    validarLocal(() => {      
      axios
        .post("/clientes", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            setLoading(false);
            alert("Cliente inserido com sucesso!");
            navigate("/clientes")
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
      <h1>Cadastro de Cliente</h1>
      <hr />
      <FormCliente handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
      {loading &&
        (<div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>)}
        {errorRn && 
        <div className="alert alert-danger mt-3" role="alert">
          {errorRn}
        </div>
        }
    </>
  )

}

export default Cadastro;