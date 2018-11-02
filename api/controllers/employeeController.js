'use strict'

var Employee = require('../models/Employee');

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





// exports.update_a_task = function(req, res) {
//     Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
//         if(err) res.send(err);
//         res.json(task);
//     });
// };

// exports.delete_a_task = function(req, res) {
//     Task.remove({_id: req.params.taskId}, function(err, task) {
//         if(err)
//             res.send(err);
//         res.json({ message: 'Task successfully deleted' });
//     });
// };