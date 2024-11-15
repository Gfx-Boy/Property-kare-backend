const express = require('express');
const router = express.Router();

router.use('/property', (req, res) => {
    res.send('Property Management Service Endpoint');
    require('../controllers/propertyController').handleRequest(req, res);
});

// Checklist and Reminder Service Routes
router.use('/checklist', (req, res) => {
    res.send('Checklist and Reminder Service Endpoint');
    // Replace with actual controller for checklist
});

// Maintenance Log Service Routes
router.use('/maintenance', (req, res) => {
    res.send('Maintenance Log Service Endpoint');
});

// Educational Content Service Routes
router.use('/content', (req, res) => {
    res.send('Educational Content Service Endpoint');
});

// Alert and Smart Integration Service Routes
router.use('/alert', (req, res) => {
    res.send('Alert and Smart Integration Service Endpoint');
});

// Notification Service Routes
router.use('/notification', (req, res) => {
    res.send('Notification Service Endpoint');
    // Replace with actual controller for notification service
});

module.exports = router;
