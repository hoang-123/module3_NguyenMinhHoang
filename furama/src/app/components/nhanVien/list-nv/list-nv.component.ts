import { Employee } from './../../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-list-nv',
  templateUrl: './list-nv.component.html',
  styleUrls: ['./list-nv.component.css']
})
export class ListNVComponent implements OnInit {

  employee: Employee;
  employeeList: Employee[] = [];
  employeeForm: FormGroup;
  keyword: string;

  constructor(
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private activatedRouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      next => (this.employeeList = next),
      error => (this.employeeList = [])
    );
  }
  deleteEmployee(i) {
    const emloyee = this.employeeList[i];
    this.employeeService.deleteEmployee(emloyee.id).subscribe(() => {
        this.employeeList = this.employeeList.filter(t => t.id !== emloyee.id);
    });
  }

}
