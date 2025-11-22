const yup = require('yup');

module.exports = yup.object({
  nome: yup.string().required(),
  preco: yup.number().required().min(0),
  duracaoDias: yup.number().required().min(1),
  descricao: yup.string().nullable()
});
