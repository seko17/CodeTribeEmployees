import { Component, OnInit } from '@angular/core';
import { employees } from 'src/app/model/employees';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeesService } from 'src/app/service/employees.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  selectedID: number;
  employee: employees;
  constructor(
    private activateRouter: ActivatedRoute,
    private employeeservice: EmployeesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
      this.selectedID = data.id;
    });
    this.getArtistById();
  }
  getArtistById() {
    this.employee = this.employeeservice.getEmployeeById(this.selectedID);
  }
  onSubmit(v) {
    this.employeeservice.updatEmployee(v);
    this.router.navigate(["/read-employee"]);
  }

}
