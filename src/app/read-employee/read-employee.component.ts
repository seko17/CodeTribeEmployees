import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import { employees } from '../model/employees';

@Component({
  selector: 'app-read-employee',
  templateUrl: './read-employee.component.html',
  styleUrls: ['./read-employee.component.scss']
})
export class ReadEmployeeComponent implements OnInit {
  employeeList: Array<employees>;

  constructor(private employeesService:EmployeesService) { }

  ngOnInit() {
    this.getEmployees();
  }
  getEmployees(){

this.employeeList= this.employeesService.getEmployees();
console.log(this.employeeList);
  }
  onDelete(id) {
    this.employeesService.delete(id);
  }
}
