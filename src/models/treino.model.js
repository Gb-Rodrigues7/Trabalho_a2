const mongoose = require('mongoose');
const { Schema } = mongoose;

const TreinoSchema = new Schema({
  nome: { type: String, required: true },
  professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
  exercicios: [{ type: Schema.Types.ObjectId, ref: 'Exercicio' }],
  objetivo: { type: String },
  duracaoMinutos: { type: Number }
});

module.exports = mongoose.model('Treino', TreinoSchema);
