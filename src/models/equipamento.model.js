const mongoose = require('mongoose');
const { Schema } = mongoose;

const EquipamentoSchema = new Schema({
  nome: { type: String, required: true },
  localizacao: { type: String },
  status: { type: String, enum: ['operante','manutencao','avariado'], default: 'operante' }
});

module.exports = mongoose.model('Equipamento', EquipamentoSchema);
