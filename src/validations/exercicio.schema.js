const yup = require('yup');

module.exports = yup.object({
  nome: yup.string().required(),
  descricao: yup.string().nullable(),
  nivel: yup.string().oneOf(['iniciante','intermediario','avancado']).nullable(),
  equipamento: yup.string().nullable()
});
