const mongoose = require('mongoose');
const { Schema } = mongoose;

const PagamentoSchema = new Schema({
  aluno: { type: Schema.Types.ObjectId, ref: 'Aluno', required: true },
  plano: { type: Schema.Types.ObjectId, ref: 'Plano', required: true },
  valor: { type: Number, required: true },
  metodo: { type: String, enum: ['cartao','boleto','pix'], default: 'pix' },
  dataPagamento: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pagamento', PagamentoSchema);
