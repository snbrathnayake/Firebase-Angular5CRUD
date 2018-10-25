import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[CustomerService] // all child componet can access the service from here.
})
export class CustomersComponent implements OnInit {

  constructor(private customerService:CustomerService) { }

  ngOnInit() {
  }

}
