import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "../../lib/ValidatorAnimal";
import { handleChange, validar } from "../../lib/FormUtils";
import FormAnimal from "../../components/animais/Form";
import Select from 'react-select';

const Cadastro = () => {

  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
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
        .post("/animais", inputs)
        .then((resp) => {
          if (resp.status == 200) {
            setLoading(false);
            alert("Animal inserido com sucesso!");
            navigate("/animais")
          }
        });
      console.log("Enviou dados para a API.");
    });
  }

  const handleSelect = () => {
    console.log(inputs);
  };

  function handleChangeSelect(item) {
    const data = item.map((obj) => {
      return {
        id: obj.value 
      }
    })
    setInputs((prevInputs) => ({ ...prevInputs, ['animais']: data }));
  }

  useEffect(() => {
    validarLocal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputs])

  const options = [
    { value: "1", label: "Produto 01" },
    { value: "2", label: "Produto 02" },
    { value: "3", label: "Produto 03" },
    { value: "4", label: "Produto 04" },
    { value: "5", label: "Produto 05" }
  ];

  return (
    <>
      <h1>Cadastro de Animal</h1>
      <hr />
      <FormAnimal handleSubmit={handleSubmit} handleChange={handleChangeLocal} inputs={inputs} errors={errors} />
      
      <Select
        isMulti
        options={options}
        onChange={handleChangeSelect}
        className="animal"
        name="animal"
        id="animal"
        isClearable={true}
        isSearchable={true}
        isDisabled={false}
        isLoading={false}
        isRtl={false}
        closeMenuOnSelect={false}
      />

      {loading &&
        (<div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Carregando...</span>
          </div>
        </div>)}
      <button onClick={handleSelect}>Imprimir itens</button>
      <select name="cars" id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </>
  )

}

export default Cadastro;