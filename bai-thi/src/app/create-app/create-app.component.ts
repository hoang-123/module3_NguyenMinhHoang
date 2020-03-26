import { Awesome } from './../awesome.model';
import { AwesomeService } from './../awesome.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-app',
  templateUrl: './create-app.component.html',
  styleUrls: ['./create-app.component.css']
})
export class CreateAppComponent implements OnInit {

  awe: Awesome = new Awesome();
  aweForm: FormGroup;
  constructor(
    private aweService: AwesomeService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aweForm = this.fb.group({
      id: [''],
      url: [''],
      descriptions: ['']
    });
  }
//   onSubmit(form) {
//     this.awe.id = 5;
//     this.awe.url = form.url;
//     this.awe.descriptions = form.descriptions;
//     console.log(this.awe);
//     this.aweService.addOne(this.awe).subscribe(
//             next => {
//               this.router.navigate(['list']);
//             },
//         );
// }

}
