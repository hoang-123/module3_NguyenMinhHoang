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
  selector: 'app-edit-cus',
  templateUrl: './edit-cus.component.html',
  styleUrls: ['./edit-cus.component.css']
})
export class EditCusComponent implements OnInit {

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
      hoTen: ['', [Validators.required, Validators.pattern]],
      ngaySinh: ['', [Validators.required]],
      soCM: ['', [Validators.required, Validators.minLength(9)]],
      soDT: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.pattern]],
      diaChi: ['', [Validators.required, Validators.pattern]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomerById(id).subscribe(
      next => {
        this.customer = next;
        this.customerForm.patchValue(this.customer);
      },
      error => {
        console.log(error);
        this.customer = null;
      }
    );
  }
  onSubmit() {
    if (this.customerForm.valid) {
        const { value } = this.customerForm;
        const data = {
            ...this.customer,
            ...value
        };
        this.customerService.updateCustomer(data).subscribe(
            next => {
                this.router.navigate(['customer/edit']);
            },
            error => console.log(error)
        );
    }
}

}
