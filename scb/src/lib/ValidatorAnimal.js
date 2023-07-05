import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório."),
    peso: yup.number().required("Peso é obrigatório."),
    dataVacinacao: yup.date().required("Data de Vacinacao é obrigatório."),
    dataNascimento: yup.date().required("Data de Nascimento é obrigatório.")
});

export default validator;