import { Customer } from './../../../model/customer';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-cus',
  templateUrl: './list-cus.component.html',
  styleUrls: ['./list-cus.component.css']
})
export class ListCusComponent implements OnInit {

  customer: Customer;
  customerList: Customer[] = [];
  customerForm: FormGroup;
  keyword: string;

  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      next => (this.customerList = next),
      error => (this.customerList = [])
    );
  }

  deleteCusomer(i) {
    const customer = this.customerList[i];
    this.customerService.deleteCustomer(customer.id).subscribe(() => {
        this.customerList = this.customerList.filter(t => t.id !== customer.id);
    });
  }

  Search() {
    this.customerService.search(this.keyword).subscribe(data => {this.customerList = data; });
  }


}
