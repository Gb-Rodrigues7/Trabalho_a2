const yup = require('yup');

module.exports = yup.object({
  aluno: yup.string().required(),
  plano: yup.string().required(),
  valor: yup.number().required().min(0),
  metodo: yup.string().oneOf(['cartao','boleto','pix']).required()
});
