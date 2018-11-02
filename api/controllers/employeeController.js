'use strict'

let Employee = require('../models/Employee');

exports.list_all_employees = function(req, res) {
    Employee.find({}, function(err, employee) {
        if(err) res.send(err);
        res.json(employee)
    });
};

exports.create_a_employee = function(req, res) {
    const new_employee = new Employee(req.body);
    new_employee.save(function(err, employee) {
        if(err) res.send(err);
        res.json(employee)
    });
};  

exports.get_a_employee = function(req, res) {
    Employee.findOne({employee_id: req.params.id}, function(err, employee) {
      if (err)
        res.send(err);
      res.json(employee);
    });
  };

