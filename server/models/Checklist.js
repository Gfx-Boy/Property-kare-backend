const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ChecklistSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    propertyId: {
      type: Schema.Types.ObjectId,
      ref: 'Property',
      required: true
    },
    tasks: [{
      type: Schema.Types.ObjectId,
      ref: 'Task'
    }]
  });
  
  const Checklist = mongoose.model('Checklist', ChecklistSchema);
  module.exports = Checklist;
  