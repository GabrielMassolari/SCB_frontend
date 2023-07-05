/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome do funcionario" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="text" field="cpf" label="CPF" placeholder="CPF" error={errors?.cpf} onChange={handleChange} value={inputs?.cpf} />
            <FormInput type="date" field="dataNascimento" label="Data" placeholder="01/01/2023" error={errors?.dataNascimento} onChange={handleChange} value={inputs?.dataNascimento} />
            <FormInput type="number" field="salario" label="Salário" placeholder="1500" error={errors?.salario} onChange={handleChange} value={inputs?.salario} />
            <FormButtons cancelTarget="/funcionarios" />
        </form>
    )
}

export default Form

