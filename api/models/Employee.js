'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    employee_id: {
        type: Number,
        required: true
    },
    employeeName: {
        type: String,
        required: 'Kindly enter the name of the employee'
    },
    employeeTitle: {
        type: String,
        required: 'Kindly enter the employee Title'
    }
});


module.exports = mongoose.model('Employee', EmployeeSchema);