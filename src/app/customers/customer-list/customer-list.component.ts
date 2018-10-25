import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../models/customer.model';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerArray: Customer[];

  constructor(
    private customerService: CustomerService,
    private toastMessage: ToastrService) { }

  ngOnInit() {
    this.customerService
      .getCustomer()
      .subscribe(item => {
        this.customerArray = [];
        item.forEach(element => {
          const response = element.payload.toJSON();
          response["$key"] = element.key;
          this.customerArray.push(response as Customer);
        });
      });
  }

  onEdit(customer: Customer) {
    this.customerService.form.setValue(customer);
  }

  onDelete(key: string) {
    if (confirm('Are you sure to delete this record?') == true) {
      this.customerService.deleteCustomer(key);
      this.toastMessage.warning('Delete Successfully', 'Customer Register');
    }
  }

}
