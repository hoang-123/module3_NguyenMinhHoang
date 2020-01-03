import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from 'src/app/model/customer';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-cus',
  templateUrl: './create-cus.component.html',
  styleUrls: ['./create-cus.component.css']
})
export class CreateCusComponent implements OnInit {

  customer: Customer;
  customerForm: FormGroup;
  constructor(
    private customerService: CustomerService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.customerForm = this.fb.group({
      maKH: ['', [Validators.required, Validators.pattern(/^(KH)[-][\d]{4}$/)]],
      hoTen: ['', [Validators.required]],
      ngaySinh: ['', [Validators.required]],
      soCM: ['', [Validators.required, Validators.pattern(/^[1-9][\d]{8}$/)]],
      soDT: ['', [Validators.required, Validators.pattern(/^(\+84)[\d]{9,10}$/)]],
      email: ['', [Validators.required, Validators.pattern(/^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/)]],
      diaChi: ['', [Validators.required]]
    });
  }
  onSubmit() {
    if (this.customerForm.valid) {
        const { value } = this.customerForm;
        const data = {
            ...this.customer,
            ...value
        };
        this.customerService.createCustomer(data).subscribe(
            next => {
                this.router.navigate(['customer/list']);
            },
            error => console.log(error)
        );
    }
}
}
