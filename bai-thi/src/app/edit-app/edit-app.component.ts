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
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

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
    const id = +this.route.snapshot.paramMap.get('id');
    this.aweService.getAwesomeById(id).subscribe(
      next => {
        this.awe = next;
        this.aweForm.patchValue(this.awe);
      },
      error => {
        console.log(error);
        this.awe = null;
      }
    );
  }
  onSubmit() {
    if (this.aweForm.valid) {
        const { value } = this.aweForm;
        const data = {
            ...this.awe,
            ...value
        };
        this.aweService.updateAwesome(data).subscribe(
            next => {
                this.router.navigate(['list']);
            },
            error => console.log(error)
        );
    }
}


}
