const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  itemName: { type: String, required: true },
  completed: { type: Boolean, default: false },
  checklist: { type: mongoose.Schema.Types.ObjectId, ref: 'Checklist' },
});

module.exports = mongoose.model('Item', ItemSchema);

