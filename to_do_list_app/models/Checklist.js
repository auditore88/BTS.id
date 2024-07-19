const mongoose = require('mongoose');

const ChecklistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }],
});

module.exports = mongoose.model('Checklist', ChecklistSchema);

