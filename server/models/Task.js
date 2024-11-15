const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  propertyId: {
    type: Schema.Types.ObjectId,
    ref: 'Property',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  checklist: {
    type: Boolean,
    default: false 
  }
});

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;
