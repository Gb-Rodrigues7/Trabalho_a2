const mongoose = require('mongoose');
const { Schema } = mongoose;

const ExercicioSchema = new Schema({
  nome: { type: String, required: true },
  descricao: { type: String },
  nivel: { type: String, enum: ['iniciante','intermediario','avancado'], default: 'iniciante' },
  equipamento: { type: Schema.Types.ObjectId, ref: 'Equipamento' }
});

module.exports = mongoose.model('Exercicio', ExercicioSchema);
