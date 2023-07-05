import * as yup from "yup";

const validator = yup.object().shape({
    galpao: yup.number("Somente números.").required("Galpão é obrigatório."),
    lote: yup.number("Somente números.").required("Lote é obrigatório."),
    funcionario: yup.number("Somente números.").required("Funcionário é obrigatório."),
    dataVacinacao: yup.date("Data inválida.").required("Data é obrigatório.")
});

export default validator;