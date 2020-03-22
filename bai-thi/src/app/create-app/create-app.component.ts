import { Awesome } from './../awesome.model';
import { AwesomeService } from './../awesome.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent implements OnInit {

  awe: Awesome;
  aweForm: FormGroup;
  constructor(
    private aweService: AwesomeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aweForm = this.fb.group({
      url: [''],
      descriptions: ['']
    });
  }
  onSubmit() {
    if (this.aweForm.valid) {
        const { value } = this.aweForm;
        const data = {
            ...this.awe,
            ...value
        };
        this.aweService.createAwesome(data).subscribe(
            next => {
                this.router.navigate(['list']);
            },
            error => console.log(error)
        );
    }
}

}
