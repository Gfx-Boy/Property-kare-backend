const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');

router.post('/properties', propertyController.createProperty);


router.get('/properties', propertyController.getAllProperties);


router.get('/properties/:id', propertyController.getPropertyById);


router.put('/properties/:id', propertyController.updateProperty);


router.delete('/properties/:id', propertyController.deleteProperty);


router.post('/properties/:propertyId/tasks', propertyController.addTask);


router.patch('/properties/:propertyId/tasks/:taskId/complete', propertyController.completeTask);


router.get('/properties/:propertyId/tasks', propertyController.getTasksForProperty);


module.exports = router;
