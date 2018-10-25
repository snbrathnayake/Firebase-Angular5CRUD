import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private toastMessage: ToastrService
  ) { }

  submitted: boolean;
  // store all the form controls inside the formGroup object in customer service.
  formControls = this.customerService.form.controls;

  ngOnInit() {
    this.customerService.getCustomer();
    this.resetForm();
  }

  onSubmit() {
    this.submitted = true;

    if (this.customerService.form.valid) {
      if (this.customerService.form.get('$key').value == null) {
        this.customerService.insertCustomer(this.customerService.form.value);
        this.toastMessage.success('Submitted Successfully', 'Customer Register');
      } else {
        this.customerService.updateCustomer(this.customerService.form.value);
        this.toastMessage.success('Updated Successfully', 'Customer Register');
      }
      this.resetForm();
      this.submitted = false;
    } else {
      console.log('NOT form.valid ');
    }

  }

  resetForm() {
    this.customerService.form.reset();
    this.customerService.customer = {
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      location: ''
    }
  }

}
