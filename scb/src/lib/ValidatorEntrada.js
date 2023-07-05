import * as yup from "yup";

const validator = yup.object().shape({
    galpao: yup.number("Somente números.").required("Galpão é obrigatório."),
    //animais: yup.number("Somente números.").required("Instrutor é obrigatório."),
    funcionario: yup.number("Somente números.").required("Funcionário é obrigatório."),
    dataEntrada: yup.date("Data inválida.").required("Data é obrigatório.")
});

export default validator;