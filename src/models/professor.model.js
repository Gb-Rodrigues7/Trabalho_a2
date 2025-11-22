const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProfessorSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  especialidade: { type: String },
  telefone: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Professor', ProfessorSchema);
