import { Service } from './../../../model/dichVu';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/dv.service';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-dv',
  templateUrl: './edit-dv.component.html',
  styleUrls: ['./edit-dv.component.css']
})
export class EditDvComponent implements OnInit {

  dv: Service;
  dvForm: FormGroup;
  constructor(
    private dvService: ServiceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.dvForm = this.fb.group({
      maDV: ['', [Validators.required, Validators.pattern('^(DV)[-][\\d]{4}$')]],
      tenDV: ['', [Validators.required]],
      dienTich: ['', [Validators.required]],
      soTang: ['', [Validators.required]],
      soNguoiToiDa: ['', [Validators.required]],
      chiPhiThue: ['', [Validators.required]],
      kieuThue: ['', [Validators.required]],
      trangThai: ['', [Validators.required]]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.dvService.getServiceById(id).subscribe(
      next => {
        this.dv = next;
        this.dvForm.patchValue(this.dv);
      },
      error => {
        console.log(error);
        this.dv = null;
      }
    );
  }
  onSubmit() {
    if (this.dvForm.valid) {
        const { value } = this.dvForm;
        const data = {
            ...this.dv,
            ...value
        };
        this.dvService.updateCustomer(data).subscribe(
            next => {
                this.router.navigate(['service/edit']);
            },
            error => console.log(error)
        );
    }
}

}
