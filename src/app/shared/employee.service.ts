import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //Global Variable
  formEmployeeData : Employee = new Employee();

  //List of Employee -- Retrieve all Records
  employees : Employee[]; //All Employees

  constructor(private httpClient : HttpClient)
  {

  }

  //Call REST API
  //  1 Get all Employees
  getAllEmployees() : Observable<any>
  {
    //  http://localhost:9095/api/employees
    return this.httpClient.get(environment.apiUrl + "/api/employees");
  }

  //  2 Retrieve all Employees for Listing
  bindGetAllEmployeesList()
  {
    this.httpClient.get(environment.apiUrl + '/api/employees')
    .toPromise()
    .then(
      (response) => {
        console.log(response);
        this.employees = response as Employee[];
      }
    );
  }

   // INSERT Employee
   insertEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/employees', employee);
  }

  // UPDATE Employee
  updateEmployee(employee: Employee): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/employees', employee);
  }

  // DELETE Employee
  deleteEmployee(employee: Employee): Observable<any> {
    
    return this.httpClient.put(environment.apiUrl + '/api/employees/'+employee.empID, employee);
  }
}
