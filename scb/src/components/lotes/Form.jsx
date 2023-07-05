/* eslint-disable react/prop-types */
import FormButtons from "../FormButtons"
import FormInput from "../FormInput"


const Form = ({ handleSubmit, handleChange, errors, inputs }) => {
    return (
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormInput type="text" field="lote" label="Lote" placeholder="Nome do Lote" error={errors?.lote} onChange={handleChange} value={inputs?.lote} />
            <FormInput type="date" field="dataVencimento" label="DataVencimento" placeholder="01/01/2023" error={errors?.dataVencimento} onChange={handleChange} value={inputs?.dataVencimento} />
            <FormInput type="number" field="quantidadeDoses" label="Doses" placeholder="3" error={errors?.quantidadeDoses} onChange={handleChange} value={inputs?.quantidadeDoses} />
            <FormButtons cancelTarget="/alunos" />
        </form>
    )
}

export default Form

