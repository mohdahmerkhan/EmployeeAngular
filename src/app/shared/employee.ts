import { Department } from "./department";

export class Employee
{
    empID : number;
    empPhone : string;
    empName : string;
    designation : string;
    dateOfJoining : Date;
    salary : number;
    deptID : number;    //Join Column
    department : Department;
    active : boolean;

    constructor()
    {
        this.department = new Department();
    }
}
