import { Component, Input } from '@angular/core';
import {  FormBuilder  } from '@angular/forms';
import { EmpService } from './emp.service';

@Component({
  selector: 'employee',
  template: `<h1>Hello {{name}}!</h1>              
              <div *ngFor= 'let emp of employees'>
                 {{emp.userId}} 
              </div>
             `,
  styles: [`h1 { font-family: Lato; }`]
})
export class EmployeeComponent  {
  @Input() name: string;
  @Input() employees: any[];
 

  constructor(private fb: FormBuilder, private empService: EmpService) {
    
  }
  ngOnInit() {
    console.log(this.employees);
    this.empService.getEmployees().subscribe((employees: any) => {
      
      console.log( 'emp' + employees);
    })  
  }
 
  
}
