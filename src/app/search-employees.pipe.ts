import { Pipe, PipeTransform } from '@angular/core';
import { employees } from './model/employees';

@Pipe({
  name: 'searchEmployees'
})
export class SearchEmployeesPipe implements PipeTransform {

  transform(value: Array<employees>, args?: string): any {
    if (!args) {
      return value;
    }
args = args.toLowerCase();
 
return value.filter(employees => {
  return employees.name.toLowerCase().includes(args);
});

  }

}
