import { Awesome } from './../awesome.model';
import { AwesomeService } from './../awesome.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

  awe: Awesome;
  bookForm: FormGroup;

  constructor(
    private aweService: AwesomeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit() {
    // const id = +this.route.snapshot.paramMap.get('id');
    // this.aweService.getOne(id).subscribe(
    //     next => (this.awe = next),
    // );
    this.bookForm = this.fb.group({
      url: [''],
      descriptions: [''],
      id: ['']
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.aweService.getOne(id).subscribe(
      next => {
        this.awe = next;
        this.bookForm.patchValue(this.awe);
      },
      error => {
        console.log(error);
        this.awe = null;
      }
    );

}
  onSubmit() {
     this.aweService.update(this.bookForm.value).subscribe(
      next => {
          this.router.navigate(['/list']);
      },
      error => console.log(error)
      );
  }
}
