import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Employee } from '../models/employee.model';


@Injectable()
export class EmployeeService {
  
  employeeList: AngularFireList<any>;
  employee: Employee = new Employee();

  /**
   * it better you can use generic service class for all the http verbs
   * GET,POST,UPDATE and DELETE
   */
  constructor(private database: AngularFireDatabase) { }

  getEmployee() {
    this.employeeList = this.database.list('employees');    
    return this.employeeList;
  }

  insertEmployee(employee: Employee) {
    this.employeeList.push({
      name: employee.name,
      office: employee.office,
      position: employee.position,
      salary: employee.salary,
    });
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key , {
      name: employee.name,
      office: employee.office,
      position: employee.position,
      salary: employee.salary,
    });
  }

  deleteEmployee(employee_key: string) {
    this.employeeList.remove(employee_key);
  }
}
