const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropertySchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    type: String,
    required: true
  },
  propertyType: {
    type: String,
    enum: ['Apartment', 'House', 'Condo', 'Commercial'],
    required: true
  },
  maintenanceLogs: [{
    type: Schema.Types.ObjectId,
    ref: 'MaintenanceLog'
  }],
  checklists: [{
    type: Schema.Types.ObjectId,
    ref: 'Checklist'
  }],
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task'
  }],
  contractors: [{
    type: Schema.Types.ObjectId,
    ref: 'Contractor'
  }],
  weatherAlerts: [{
    type: Schema.Types.ObjectId,
    ref: 'Alert'
  }]
});

const Property = mongoose.model('Property', PropertySchema);
module.exports = Property;
