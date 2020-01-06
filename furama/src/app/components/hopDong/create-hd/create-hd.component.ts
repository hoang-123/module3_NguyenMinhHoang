import { Service } from 'src/app/model/dichVu';
import { Employee } from './../../../model/employee';
import { Component, OnInit } from '@angular/core';
import { HopDongService } from 'src/app/service/hopdong.service';
import { Contract } from 'src/app/model/hopdong';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/model/customer';
import { EmployeeService } from 'src/app/service/employee.service';
import { CustomerService } from 'src/app/service/customer.service';
import { ServiceService } from 'src/app/service/dv.service';

@Component({
  selector: 'app-create-hd',
  templateUrl: './create-hd.component.html',
  styleUrls: ['./create-hd.component.css']
})
export class CreateHDComponent implements OnInit {

  hopdong: Contract;
  employeeList: Employee[] = [];
  customerList: Customer[];
  serviceList: Service[];
  hopdongForm: FormGroup;
  constructor(
    private hdService: HopDongService,
    private emService: EmployeeService,
    private cusService: CustomerService,
    private serService: ServiceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.emService.getEmployees().subscribe(em => this.employeeList = em);
    this.cusService.getCustomers().subscribe(cus => this.customerList = cus);
    this.serService.getServices().subscribe(ser => this.serviceList = ser);
    this.hopdongForm = this.fb.group({
      employee: ['', [Validators.required]],
      customer: ['', [Validators.required]],
      service: ['', [Validators.required]],
      ngayLam: ['', [Validators.required]],
      ngayHet: ['', [Validators.required]],
      tienDatCoc: ['', [Validators.required]],
      tongTien: ['', [Validators.required]]
    });
  }
  onSubmit() {
    console.log(this.employeeList);
    if (this.hopdongForm.valid) {
        const { value } = this.hopdongForm;
        const data = {
            ...this.hopdong,
            ...value
        };
        this.hdService.createContract(data).subscribe(
            next => {
                this.router.navigate(['contract/list']);
            },
            error => console.log(error)
        );
    }
}

}
