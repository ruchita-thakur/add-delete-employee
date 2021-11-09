import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {
    name:string
    gender:string
    location:string
    department:string
    phoneNumber:number
    suggestions:string
    agreeCheckbox:boolean

  @Input() employee:Employee;

  @Output() employeeAdd: EventEmitter<Employee>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const employee={
      name:this.name,
      gender:this.gender,
      location:this.location,
      department:this.department,
      phoneNumber:this.phoneNumber,
      suggestions:this.suggestions,
      agreeCheckbox:this.agreeCheckbox

    }
    this.employeeAdd.emit(employee)
  }

  resetUserForm(userForm: NgForm) {
    userForm.resetForm();;
} 

  

}
