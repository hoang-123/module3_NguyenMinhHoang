import { Awesome } from './../awesome.model';
import { AwesomeService } from './../awesome.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-app',
  templateUrl: './list-app.component.html',
  styleUrls: ['./list-app.component.css']
})
export class ListAppComponent implements OnInit {

  aweList: Awesome[] = [];
  aweForm: FormGroup;

  constructor(
    private aweService: AwesomeService,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.aweService.getSome().subscribe(
      next => (this.aweList = next),
      error => (this.aweList = [])
    );
  }
  deleteAwe(i) {
    if (confirm('Are you sure delete this Awesome ' + name + '?')) {
    const awe = this.aweList[i];
    this.aweService.deleteOne(awe.id).subscribe(() => {
        this.aweList = this.aweList.filter(t => t.id !== awe.id);
    });
  }
}

}
