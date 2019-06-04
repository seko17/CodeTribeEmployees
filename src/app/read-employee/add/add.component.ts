import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/service/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(private employee: EmployeesService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(v){
    this.employee.addEmployee(v);
    this.router.navigate(["/read-employee"]);
  }

}
