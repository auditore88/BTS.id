const Checklist = require('../models/Checklist');
const Item = require('../models/Item');

exports.getAllChecklists = async (req, res) => {
  try {
    const checklists = await Checklist.find({ user: req.user.id });
    res.json(checklists);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createChecklist = async (req, res) => {
  const { name } = req.body;
  try {
    const newChecklist = new Checklist({ name, user: req.user.id });
    await newChecklist.save();
    res.status(201).json(newChecklist);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteChecklist = async (req, res) => {
  try {
    await Checklist.findByIdAndDelete(req.params.checklistId);
    res.json({ msg: 'Checklist deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
