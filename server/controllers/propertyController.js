const Property = require('../models/property-model');
const Task = require('../models/Task');
const MaintenanceLog = require('../models/MaintenanceLog');

exports.createProperty = async (req, res) => {
    try {
        const property = new Property(req.body);
        const savedProperty = await property.save();
        res.status(201).json(savedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getPropertyById = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(property);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.updateProperty = async (req, res) => {
    try {
        const updatedProperty = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteProperty = async (req, res) => {
    const propertyId = req.params.id; 
    try {
        const deletedProperty = await Property.findByIdAndDelete(propertyId);
        if (!deletedProperty) {
            return res.status(404).json({ message: 'Property not found' });
        }
        res.status(200).json({ message: 'Property deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Add a new task to a property
exports.addTask = async (req, res) => {
    const { propertyId } = req.params;
    const taskData = req.body;
  
    try {
      // Add propertyId to the task data
      taskData.propertyId = propertyId;
      
      const task = new Task(taskData);
      await task.save();
  
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Complete a task and move it to MaintenanceLog
  exports.completeTask = async (req, res) => {
    const { propertyId, taskId } = req.params;
  
    try {
      // Find the task by ID
      const task = await Task.findOne({ _id: taskId, propertyId });
      if (!task) return res.status(404).json({ error: 'Task not found' });
  
      // Update checklist status
      task.checklist = true;
      await task.save();
  
      // Move task to MaintenanceLog
      const maintenanceLog = new MaintenanceLog({
        propertyId: task.propertyId,
        taskTitle: task.title,
        taskDescription: task.description
      });
      await maintenanceLog.save();
  
      // Remove task from Task collection
      await Task.findByIdAndDelete(taskId);
  
      res.status(200).json({ message: 'Task completed and moved to maintenance log', maintenanceLog });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Get all tasks for a property
  exports.getTasksForProperty = async (req, res) => {
    const { propertyId } = req.params;
  
    try {
      const tasks = await Task.find({ propertyId });
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };