const mongoose = require('mongoose');
const { Schema } = mongoose;

const TurmaSchema = new Schema({
  nome: { type: String, required: true },
  professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
  alunos: [{ type: Schema.Types.ObjectId, ref: 'Aluno' }],
  horario: { type: String }
});

module.exports = mongoose.model('Turma', TurmaSchema);
