import { Component, Input } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'employee',
  template: `<h1>Hello {{name}}!</h1>
              <form [formGroup]="form">
              <div formArrayName="names">
                <div *ngFor='let emp of getNames().controls; let i = index' [formGroupName]="i">
                  
                  <input type="text" formControlName="userId">
                 
                </div>
              </div>
                
              </form>
              <br/>
              {{form.value | json}}
              <div *ngFor= 'let emp of employees'>
                 {{emp.userId}} 
              </div>
             `,
  styles: [`h1 { font-family: Lato; }`]
})
export class EmployeeComponent  {
  @Input() name: string;
  @Input() employees: any[];
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      names: this.fb.array([])
    })
  }
  ngOnInit() {
    console.log(this.employees);
    this.employees.forEach((emp) => {
        (this.form.get('names') as FormArray).push(this.fb.group({
          userId: [emp.userId]
        }));
    });
    
  }
  getNames() : FormArray {
    return (this.form.get('names') as FormArray);
  }
  display(e) {
    console.log(e);
  }
}
