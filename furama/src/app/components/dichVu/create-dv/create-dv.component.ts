import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/dv.service';
import { Service } from 'src/app/model/dichVu';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-dv',
  templateUrl: './create-dv.component.html',
  styleUrls: ['./create-dv.component.css']
})
export class CreateDvComponent implements OnInit {

  dv: Service;
  dvForm: FormGroup;

  constructor(
    private dvService: ServiceService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

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
  }

  onSubmit() {
    if (this.dvForm.valid) {
        const { value } = this.dvForm;
        const data = {
            ...this.dv,
            ...value
        };
        this.dvService.createService(data).subscribe(
            next => {
                this.router.navigate(['service/list']);
            },
            error => console.log(error)
        );
    }
}

}
