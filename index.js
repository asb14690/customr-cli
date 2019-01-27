const mongoose = require('mongoose')
const connection = require('./config/connection')

// connect to database
const db = mongoose.connect(connection.mongoDB.url, { useNewUrlParser: true })

// import modal
const Customer = require('./model/customer')


// Add Costomers
const addCustomer = (customer) => {
  new Customer(customer).save().then(customer => {
    console.info('New Customer added')
  })
}

// Find constomer
const findCustomer = (name) => {
  // make case insensitive
  const search = new RegExp(name, 'i')
  Customer.find({$or:[{
    firstName:search
  },
{
  lastName:search
}]}).then(customer => {
  console.info(customer)
  console.info(`${customer.length} matches`)
})
}

module.exports = {
  addCustomer,
  findCustomer
}