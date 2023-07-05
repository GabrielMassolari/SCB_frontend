/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"

const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="nome" label="Nome" placeholder="Nome do Animal" error={errors?.nome} onChange={handleChange} value={inputs?.nome} />
            <FormInput type="number" field="peso" label="Peso" placeholder="330" error={errors?.peso} onChange={handleChange} value={inputs?.peso} />
            <FormInput type="date" field="dataVacinacao" label="Data Vacinacao" placeholder="01/01/2023" error={errors?.dataVacinacao} onChange={handleChange} value={inputs?.dataVacinacao} />
            <FormInput type="date" field="dataNascimento" label="Data Nascimento" placeholder="01/01/2019" error={errors?.dataNascimento} onChange={handleChange} value={inputs?.dataNascimento} />
            <FormButtons cancelTarget="/animais" />
        </form>
    )
}

export default Form

