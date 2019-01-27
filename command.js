#!/usr/bin/env node

const program = require('commander')
const { prompt } = require('inquirer')

const {
  addCustomer,
  findCustomer
} = require('./index')

// questions
const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'Customer first Name'
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'Customer last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Customer phone'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Customer email'
  }
]

program
  .version('1.0.0')
  .description('Client Management System')

/* program
  .command('add <firstName> <lastName> <phone> <email>')
  .alias('a')
  .description('add customer')
  .action((firstName, lastName, phone, email) => {
    addCustomer({ firstName, lastName, phone, email})
  }) */

program
  .command('add')
  .alias('a')
  .description('Add Customers')
  .action(() => {
    prompt(questions).then(answers => addCustomer(answers))
  })

program
  .command('find <name>')
  .alias('f')
  .description('find customer')
  .action(name => {
    findCustomer(name)
  })



program.parse(process.argv)