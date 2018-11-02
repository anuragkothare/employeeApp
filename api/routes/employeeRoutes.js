'use strict';
module.exports = function(app) {
  let employee = require('../controllers/employeeController');



  app.route('/v1/employees')
    .get(employee.list_all_employees)
    

  app.route('/v1/employee')
    .post(employee.create_a_employee)


  app.route('/v1/employees/:id')
    .get(employee.get_a_employee)
    
};