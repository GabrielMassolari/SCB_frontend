import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório."),
    cpf: yup.string().required("CPF é obrigatório."),
    dataNascimento: yup.date("Data inválida.").required("Data é obrigatório."),
    email: yup.string().required("Email é obrigatório.")
});

export default validator;