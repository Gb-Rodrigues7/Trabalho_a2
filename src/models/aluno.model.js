const mongoose = require('mongoose');
const { Schema } = mongoose;

const AlunoSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String },
  dataNascimento: { type: Date },
  plano: { type: Schema.Types.ObjectId, ref: 'Plano' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Aluno', AlunoSchema);
