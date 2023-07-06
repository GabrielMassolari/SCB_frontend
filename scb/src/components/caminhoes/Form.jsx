/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="modelo" label="Modelo" placeholder="Modelo do caminhão" error={errors?.modelo} onChange={handleChange} value={inputs?.modelo} />
            <FormInput type="number" field="ano" label="Ano" placeholder="2023" error={errors?.ano} onChange={handleChange} value={inputs?.ano} />
            <FormInput type="text" field="marca" label="Marca" placeholder="Marca do caminhão" error={errors?.marca} onChange={handleChange} value={inputs?.marca} />
            <FormInput type="number" field="quilometragem" label="Quilometragem" placeholder="XXX km" error={errors?.quilometragem} onChange={handleChange} value={inputs?.quilometragem} />
            <FormButtons cancelTarget="/caminhoes" />
        </form>
    )
}

export default Form

