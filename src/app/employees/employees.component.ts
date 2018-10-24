import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService] // all child componet can access the service from here.
})
export class EmployeesComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
  }

}
