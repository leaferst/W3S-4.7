const express = require('express');
const itemRouter = express.Router();
const itemController = require('../controllers/itemController');

itemRouter.get('/', itemController.getAllItems);

itemRouter.get('/:id', itemController.getSingleItem);

itemRouter.post('/', itemController.createNewItem);

itemRouter.put('/:id', itemController.updateItem);

itemRouter.delete('/:id', itemController.deleteItem);

module.exports = itemRouter;