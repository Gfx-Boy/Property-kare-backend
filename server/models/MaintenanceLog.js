const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MaintenanceLogSchema = new Schema({
  propertyId: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  taskTitle: {
    type: String,
    required: true
  },
  taskDescription: {
    type: String
  },
  completedAt: {
    type: Date,
    default: Date.now  // Timestamp of task completion
  }
});

const MaintenanceLog = mongoose.model('MaintenanceLog', MaintenanceLogSchema);
module.exports = MaintenanceLog;
