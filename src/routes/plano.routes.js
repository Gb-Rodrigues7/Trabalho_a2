const express = require('express');
const router = express.Router();
const controller = require('../controllers/plano.controller.js');
const schema = require('../validations/plano.schema.js');
const { validateBody, validateObjectId } = require('../middlewares/validate');

router.get('/', controller.list);
router.get('/:id', validateObjectId('id'), controller.getById);
router.post('/', validateBody(schema), controller.create);
router.put('/:id', validateObjectId('id'), validateBody(schema), controller.update);
router.delete('/:id', validateObjectId('id'), controller.remove);

module.exports = router;
