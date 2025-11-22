const mongoose = require('mongoose');
const { Schema } = mongoose;

const AvaliacaoSchema = new Schema({
  aluno: { type: Schema.Types.ObjectId, ref: 'Aluno', required: true },
  professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
  peso: { type: Number },
  altura: { type: Number },
  gorduraPercentual: { type: Number },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Avaliacao', AvaliacaoSchema);
