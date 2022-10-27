import { Injectable } from '@angular/core';
import { Department } from './department';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  //List of Departmnet -- Retrieve all Records
  departments : Department[]; //All Department

  constructor(private httpClient : HttpClient)
  {

  }

  //Call REST API Retrieve all Departments for Listing
  bindGetAllDepartmentList()
  {
    this.httpClient.get(environment.apiUrl + '/api/departments')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.departments = response as Department[];
      }
    );
  }
}
