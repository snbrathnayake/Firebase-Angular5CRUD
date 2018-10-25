import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Customer } from '../models/customer.model';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

@Injectable()
export class CustomerService {
 
  customerList: AngularFireList<any>;
  customer: Customer = new Customer();
  form:FormGroup;

  constructor(private database: AngularFireDatabase) { 
    this.form = new FormGroup({
      $key : new FormControl(null),
      fullName : new FormControl('',Validators.required),
      email : new FormControl(''),
      mobile : new FormControl('',[Validators.required,Validators.minLength(10)]),
      location : new FormControl('')
    });
  }

  getCustomer() {
    this.customerList = this.database.list('customers');    
    return this.customerList.snapshotChanges();
  }

  insertCustomer(customer: Customer) {

    this.customerList.push({
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location
    });
  }

  updateCustomer(customer: Customer) {
    this.customerList.update(customer.$key , {
      fullName: customer.fullName,
      email: customer.email,
      mobile: customer.mobile,
      location: customer.location,
    });
  }

  deleteCustomer(key: string) {
    this.customerList.remove(key);
  }
}

