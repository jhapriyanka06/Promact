import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../data/employee.service';
import { Observable } from 'rxjs';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  Qualifiacation:Observable<string[]>;
  Experiences:Observable<string[]>;
  Codes:Observable<string[]>;

  constructor(private dataservice:EmployeeService) { }

  useremployee:Employee;

  ngOnInit(): void {
    this.Qualifiacation=this.dataservice.getQualifications();
    this.Experiences=this.dataservice.getExperiences();
    this.Codes=this.dataservice.getCodes();
  }
  onSubmit(form: NgForm){
    console.log(form.value);

  }

}

