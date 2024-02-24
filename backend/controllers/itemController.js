const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
    const allItems = await Item.findAll();
    res.json(allItems);
};

exports.getSingleItem = async (req, res) => {
    const singleItem = await Item.findByPk(req.params.id);
    res.json(singleItem);
};

exports.createNewItem = async (req, res) => {
    const newItem = await Item.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
    res.json(newItem);
};

exports.updateItem = async (req, res) => {
    const updatedItem = await Item.findByPk(req.params.id);
    if (updatedItem != null) {
        await Item.update({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
        }, {
            where: {id: req.params.id}
        });
        return res.json(updatedItem);
    }
    return res.send('Item not found')
};

exports.deleteItem = async (req, res) => {
    const deletedItem = await Item.findAll({where: {id: req.params.id}});
    if (deletedItem != null) {
        await Item.destroy({where: {id: req.params.id}});
        return res.json(deletedItem);
    }
    return res.send('Item not found');
};