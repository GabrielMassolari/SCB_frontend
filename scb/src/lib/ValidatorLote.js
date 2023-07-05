import * as yup from "yup";

const validator = yup.object().shape({
    lote: yup.string().required("Nome do Lote é obrigatório.").min(6, "Nome deve ter pelo menos 6 caracteres.").max(32, "Nome deve ter no máximo 32 caracteres."),
    dataVencimento: yup.date("Data inválida.").required("Data é obrigatório."),
    quantidadeDoses: yup.number("Somente números.").required("Campo obrigatório.").min(1, "Valor mínimo é 1.").max(20, "Valor máximo é 20.")
});

export default validator;