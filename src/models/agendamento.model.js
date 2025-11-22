const mongoose = require('mongoose');
const { Schema } = mongoose;

const AgendamentoSchema = new Schema({
  aluno: { type: Schema.Types.ObjectId, ref: 'Aluno', required: true },
  turma: { type: Schema.Types.ObjectId, ref: 'Turma' },
  data: { type: Date, required: true },
  observacao: { type: String }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);
