import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  //@Input() employee:Employee;
  //@Output() employeeDelete: EventEmitter<Employee>=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // onClick(employee:Employee):void{
  //   this.employeeDelete.emit(employee)
  //   console.log("On click has been clicked")
  // }

}
