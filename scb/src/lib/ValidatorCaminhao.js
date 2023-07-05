import * as yup from "yup";

const validator = yup.object().shape({
    modelo: yup.string().required("Modelo é obrigatório."),
    ano: yup.number("Somente números.").required("Ano é obrigatório."),
    marca: yup.string().required("Marca é obrigatória."),
    quilometragem: yup.number("Campo numérico.").required("Quilometragem é obrigatório.")
});

export default validator;