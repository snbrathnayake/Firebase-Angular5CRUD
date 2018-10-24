import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../../shared/services/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeArray: Employee[];

  constructor(
    private employeeService:EmployeeService,
    private toastMessage: ToastrService) { }

  ngOnInit() {
    this.employeeService
    .getEmployee()
    .snapshotChanges()
    .subscribe( item => {
      this.employeeArray = [];
      item.forEach(element => {
      const response = element.payload.toJSON();
      response["$key"] = element.key;
       this.employeeArray.push(response as Employee);
      });
    });
  }

  onEdit(employee : Employee) {
    // here only pass the value from table to customer form-feilds
    // create copy of the 'employee' and assign to => .employeeService.employee
    this.employeeService.employee = Object.assign({} , employee );
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.employeeService.deleteEmployee(key);
      this.toastMessage.warning('Delete Successfully', 'Employee Register');
    }
  }
}
