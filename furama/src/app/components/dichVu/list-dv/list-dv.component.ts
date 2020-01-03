import { Service } from './../../../model/dichVu';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/service/dv.service';

@Component({
  selector: 'app-list-dv',
  templateUrl: './list-dv.component.html',
  styleUrls: ['./list-dv.component.css']
})
export class ListDvComponent implements OnInit {

  dv: Service;
  dvList: Service[] = [];
  dvForm: FormGroup;
  keyword: string;

  constructor(
    private dvService: ServiceService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.dvService.getServices().subscribe(
      next => (this.dvList = next),
      error => (this.dvList = [])
    );
  }

  deleteDV(i) {
    const dv = this.dvList[i];
    this.dvService.deleteService(dv.id).subscribe(() => {
        this.dvList = this.dvList.filter(t => t.id !== dv.id);
    });
  }

  Search() {
    this.dvService.search(this.keyword).subscribe(data => {this.dvList = data; });
  }


}
