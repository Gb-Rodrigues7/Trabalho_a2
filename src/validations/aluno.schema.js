const yup = require('yup');

module.exports = yup.object({
  nome: yup.string().required().min(2),
  email: yup.string().email().required(),
  telefone: yup.string().nullable(),
  dataNascimento: yup.date().nullable(),
  plano: yup.string().nullable()
});
