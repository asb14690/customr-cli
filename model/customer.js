const mongoose = require('mongoose')

// customer schema
const customerSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String
  }
})

// Define the export
module.exports = mongoose.model('Customer', customerSchema)
