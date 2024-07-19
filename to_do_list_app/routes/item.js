const express = require('express');
const router = express.Router();
const { getAllItems, createItem, getItem, updateItemStatus, deleteItem, renameItem } = require('../controllers/itemController');

router.get('/checklist/:checklistId/item', getAllItems);
router.post('/checklist/:checklistId/item', createItem);
router.get('/checklist/:checklistId/item/:checklistItemId', getItem);
router.put('/checklist/:checklistId/item/:checklistItemId', updateItemStatus);
router.delete('/checklist/:checklistId/item/:checklistItemId', deleteItem);
router.put('/checklist/:checklistId/item/rename/:checklistItemId', renameItem);

module.exports = router;

