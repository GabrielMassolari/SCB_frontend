/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome do Cliente" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="text" field="email" label="Email" placeholder="Email do Cliente" error={errors?.email} onChange={handleChange} value={inputs?.email} />
            <FormInput type="text" field="cpf" label="CPF" placeholder="CPF" error={errors?.cpf} onChange={handleChange} value={inputs?.cpf} />
            <FormInput type="date" field="dataNascimento" label="Data" placeholder="01/01/2023" error={errors?.dataNascimento} onChange={handleChange} value={inputs?.dataNascimento} />
            <FormButtons cancelTarget="/clientes" />
        </form>
    )
}

export default Form

