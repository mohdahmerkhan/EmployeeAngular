import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';

import { Employee } from 'src/app/shared/employee';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  page : number = 1;
  filterString : string = "";

  constructor(public employeeService : EmployeeService, private toastr: ToastrService) { }

  ngOnInit(): void
  {
    // Life Cycle Hook - Initialize
    console.log("Welcome Life Cycle Hook");
    // Testing

    this.employeeService.bindGetAllEmployeesList();
    
  }

  //Subscribe getAllEmployee
  getAllEmployeesList()
  {
    //Call Service
    this.employeeService.getAllEmployees().subscribe(
      response => {
        console.log("Retrieving from list");
        console.log(response);
      },
      (error) =>{
        console.log("Something Wrong");
        console.log(error);
      }
    )
  }


  
  populateForm(employee:Employee)
  {
    this.employeeService.formEmployeeData = Object.assign({},employee);
  }

  deleteEmployeeRecord(employee : Employee)
  {
    if(confirm("Confirm delete?\nIt can't be undone."))
    {
      this.employeeService.deleteEmployee(employee).subscribe(
        (result) =>{
          console.log(result);
          // window.location.reload();
          this.toastr.error('Deleted', 'Deleted Record Successfully');
          this.employeeService.bindGetAllEmployeesList();
        }
      );
    }
    // this.toastr.warning('Deleted', 'Deleted Employee');
    return;
    
  }

}
