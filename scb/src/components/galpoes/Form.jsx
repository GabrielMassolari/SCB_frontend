/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormCheckbox from "../FormCheckbox"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome do Galpão" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="number" field="capacidade" label="Capacidade" placeholder="120" error={errors?.capacidade} onChange={handleChange} value={inputs?.capacidade} />
            <FormInput type="number" field="limiteDiario" label="Limite Diário" placeholder="30" error={errors?.limiteDiario} onChange={handleChange} value={inputs?.limiteDiario} />
            <FormCheckbox field="maternidade" label="Maternidade" onChange={handleChange} error={errors?.maternidade} value={inputs?.maternidade} />
            <FormButtons cancelTarget="/galpoes" />
        </form>
    )
}

export default Form

