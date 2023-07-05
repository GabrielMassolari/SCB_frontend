import * as yup from "yup";

const validator = yup.object().shape({
    alunoId: yup.number("Somente números.").required("Aluno é obrigatório."),
    instrutorId: yup.number("Somente números.").required("Instrutor é obrigatório."),
    exercicioId: yup.number("Somente números.").required("Exercício é obrigatório."),
    series: yup.number("Somente números.").required("Séries é obrigatório.").min(1, "Valor mínimo é 1.").max(5, "Valor máximo é 5."),
    repeticoes: yup.number("Somente números.").required("Repetições é obrigatório.").min(3, "Valor mínimo é 3").max(99, "Valor máximo é 99."),
    carga: yup.number("Somente números.").required("Carga é obrigatório.").min(1, "Valor mínimo é 1kg.").max(500, "Valor máximo é 500kg."),
    data: yup.date("Data inválida.").required("Data é obrigatório.")
});

export default validator;