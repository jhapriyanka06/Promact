import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getQualifications():Observable<string[]>{
    return of (['10th','12th','UG','PG']);
  }
  getExperiences():Observable<string[]>{
    return of (['Fresher','1-2 years','3 years', '>3 years']);
  }
  getCodes():Observable<string[]>{
    return of (['C,C++','JAVA','C#','PHP','Python']);
  }
}
