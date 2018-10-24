import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from '../../shared/services/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  constructor(
    private employeeService: EmployeeService,
    private toastMessage: ToastrService
  ) { }

  ngOnInit() {
    this.employeeService.getEmployee();
    this.resetForm();
  }

  onSubmit(employeeForm: NgForm) {
    if (employeeForm.value.$key == null)
      this.employeeService.insertEmployee(employeeForm.value);
    else
      this.employeeService.updateEmployee(employeeForm.value);
    this.toastMessage.success('Submitted Successfully', 'Employee Register');
    this.resetForm(employeeForm);
  }

  resetForm(employeeForm?: NgForm) {
    if (employeeForm != null)
      employeeForm.reset(); // remove value from ui-form [1] 
    // clean the value of empobj [2]
    this.employeeService.employee = {
      $key: null,
      name: '',
      office: '',
      position: '',
      salary: 0
    }
  }

}
