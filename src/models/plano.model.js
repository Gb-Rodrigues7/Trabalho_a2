const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlanoSchema = new Schema({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  duracaoDias: { type: Number, required: true },
  descricao: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Plano', PlanoSchema);
