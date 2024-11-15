// controllers/checklistController.js
const Checklist = require('../models/Checklist');
const Property = require('../models/property-model');

exports.createChecklist = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const { title } = req.body;

    const checklist = new Checklist({ title, propertyId });
    await checklist.save();

    await Property.findByIdAndUpdate(propertyId, { $push: { checklists: checklist._id } });
    res.status(201).json(checklist);
  } catch (error) {
    res.status(500).json({ message: 'Error creating checklist', error });
  }
};

exports.getChecklists = async (req, res) => {
  try {
    const { propertyId } = req.params;
    const checklists = await Checklist.find({ propertyId }).populate('tasks');
    res.json(checklists);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving checklists', error });
  }
};
