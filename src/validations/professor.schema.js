const yup = require('yup');

module.exports = yup.object({
  nome: yup.string().required().min(2),
  email: yup.string().email().required(),
  especialidade: yup.string().nullable(),
  telefone: yup.string().nullable()
});
