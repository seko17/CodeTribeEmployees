import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from 'src/app/service/employees.service';
import { employees } from 'src/app/model/employees';

@Component({
  selector: 'app-displaybio',
  templateUrl: './displaybio.component.html',
  styleUrls: ['./displaybio.component.scss']
})
export class DisplaybioComponent implements OnInit {
selectedID: number;
employee: employees;
  constructor(private activateRouter: ActivatedRoute, private employeeService: EmployeesService ) { }

  ngOnInit() {
    this.activateRouter.params.subscribe(data => {
     this.selectedID = data.id;
    });
    this.getBoiByID();
  }
  getBoiByID(){
 this.employee =   this.employeeService.getBoiByID(this.selectedID);
 console.log(employees);
  }
}
