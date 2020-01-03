import { Contract } from './../../../model/hopdong';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HopDongService } from 'src/app/service/hopDong.service';

@Component({
  selector: 'app-list-hd',
  templateUrl: './list-hd.component.html',
  styleUrls: ['./list-hd.component.css']
})
export class ListHDComponent implements OnInit {

  contract: Contract;
  contractList: Contract[] = [];
  contractForm: FormGroup;
  keyword: string;

  constructor(
    private hdService: HopDongService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) {}


  ngOnInit() {
    this.hdService.getContracts().subscribe(
      next => (this.contractList = next),
      error => (this.contractList = [])
    );
  }
  deleteHD(i) {
    const contract = this.contractList[i];
    this.hdService.deleteContract(contract.id).subscribe(() => {
        this.contractList = this.contractList.filter(t => t.id !== contract.id);
    });
  }

}
