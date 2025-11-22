const yup = require('yup');

module.exports = yup.object({
  nome: yup.string().required(),
  professor: yup.string().nullable(),
  exercicios: yup.array().of(yup.string()).nullable(),
  objetivo: yup.string().nullable(),
  duracaoMinutos: yup.number().nullable()
});
