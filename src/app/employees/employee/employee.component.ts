import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DepartmentService } from 'src/app/shared/department.service';
import { EmployeeService } from 'src/app/shared/employee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  // DI : Constructor Injection
  constructor(public departmentService:DepartmentService,public employeeService:EmployeeService,private toastr: ToastrService) { }

  //Life Cycle Hook
  ngOnInit(): void
  {
     // Life Cycle Hook - Initialize
     console.log("Welcome Life Cycle Hook");
     // Testing

     this.departmentService.bindGetAllDepartmentList();
  }

  //Submit Form
  onSubmit(form)
  {
    console.log(form.value);
    // return;
  
    // INSERT(id==00) or UPDATE(id>=0)
    let insertId = this.employeeService.formEmployeeData.empID;

    //checking for Insert or Update
    if(insertId==0 || insertId == null)
    {
      //INSERT
      this.insertEmployeeRecord(form);

    }
    else
    {
      //UPDATE
     this.updateEmployeeRecord(form);  
    } 
  }

  //Insert Method
  insertEmployeeRecord(form?: NgForm)
  {
    console.log("Inserting a record");
    console.log(form.value);
    // return;
    this.employeeService.insertEmployee(form.value).subscribe(
      (result) =>{
        console.log(result);
        // window.location.reload();
        this.toastr.success('Inserted', 'Inserted Record Successfully');
        this.employeeService.bindGetAllEmployeesList();
      }
    );
  }

  //Update Method
  updateEmployeeRecord(form?: NgForm)
  {
    console.log("Updating the record");
    console.log(form.value);
    // return;
    this.employeeService.updateEmployee(form.value).subscribe(
      (result) =>{
        console.log(result);
        // window.location.reload();
        this.toastr.success('Updated', 'Updated Record Successfully');
        this.employeeService.bindGetAllEmployeesList();
      }
    );
  }

    
}
