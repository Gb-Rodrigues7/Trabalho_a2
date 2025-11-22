const Model = require('../models/agendamento.model.js');
const mongoose = require('mongoose');

const list = async (req, res) => {
  try {
    const items = await Model.find({}).limit(100).lean();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getById = async (req, res) => {
  try {
    // CORREÇÃO: Chaves simples para desestruturação
    const { id } = req.params;
    const item = await Model.findById(id).lean(); // Usando a variável 'id' desestruturada
    if (!item) return res.status(404).json({ error: 'Agendamento not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const create = async (req, res) => {
  try {
    const obj = await Model.create(req.body);
    res.status(201).json(obj);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const update = async (req, res) => {
  try {
    const updated = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'Agendamento not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const remove = async (req, res) => {
  try {
    const deleted = await Model.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Agendamento not found' });
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// CORREÇÃO: Chaves simples para exportar o objeto de funções
module.exports = { list, getById, create, update, remove };