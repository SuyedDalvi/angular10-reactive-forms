import { Component, VERSION } from '@angular/core';
import * as data from './../assets/employee.json' ;
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  employees = (data as any).Employees;
  constructor(){
    console.log(this.employees)
  }
}
