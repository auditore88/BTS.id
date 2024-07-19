const Item = require('../models/Item');
const Checklist = require('../models/Checklist');

exports.getAllItems = async (req, res) => {
  try {
    const items = await Item.find({ checklist: req.params.checklistId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createItem = async (req, res) => {
  const { itemName } = req.body;
  try {
    const newItem = new Item({ itemName, checklist: req.params.checklistId });
    await newItem.save();
    const checklist = await Checklist.findById(req.params.checklistId);
    checklist.items.push(newItem);
    await checklist.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.checklistItemId);
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateItemStatus = async (req, res) => {
  try {
    const item = await Item.findById(req.params.checklistItemId);
    item.completed = !item.completed;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.checklistItemId);
    res.json({ msg: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.renameItem = async (req, res) => {
  const { itemName } = req.body;
  try {
    const item = await Item.findById(req.params.checklistItemId);
    item.itemName = itemName;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
