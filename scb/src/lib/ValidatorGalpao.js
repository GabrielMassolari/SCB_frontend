import * as yup from "yup";

const validator = yup.object().shape({
    nome: yup.string().required("Nome é obrigatório."),
    capacidade: yup.number().required("Capacidade é obrigatório."),
    limiteDiario: yup.number("Somente números.").required("Limite Diário é obrigatório."),
    maternidade: yup.boolean()
});

export default validator;