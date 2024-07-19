const express = require('express');
const router = express.Router();
const { getAllChecklists, createChecklist, deleteChecklist } = require('../controllers/checklistController');

router.get('/checklist', getAllChecklists);
router.post('/checklist', createChecklist);
router.delete('/checklist/:checklistId', deleteChecklist);

module.exports = router;

