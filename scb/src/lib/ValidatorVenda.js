import * as yup from "yup";

const validator = yup.object().shape({
    galpao: yup.number("Somente números.").required("Galpão é obrigatório."),
    cliente: yup.number("Somente números.").required("Cliente é obrigatório."),
    caminhao: yup.number("Somente números.").required("Caminhão é obrigatório."),
    distanciaEntrega: yup.number("Somente números").required("Distância de Entrega é obrigatório"),
    preco: yup.number("Somente números").required("Preço é obrigatório"),
    dataVenda: yup.date("Data inválida.").required("Data é obrigatório.")
});

export default validator;