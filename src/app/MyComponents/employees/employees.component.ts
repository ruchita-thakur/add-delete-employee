import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from 'src/app/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent implements OnInit {
  pageTitle: string = 'Employee Details';
  employees: Employee[];
  localItem: string;
  @Input() employee: Employee;
  //@Output() employeeDelete: EventEmitter<Employee>=new EventEmitter();
  constructor() {
    this.localItem = localStorage.getItem('employees');
    if (this.localItem == null) {
      this.employees = [];
    } else {
      this.employees = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {}

  // onClick(employee:Employee):void{
  //   //this.employeeDelete.emit(employee)
  //   console.log("On click has been clicked")
  // }

  deleteEmployee(employee: Employee) {
    console.log(employee);
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
    console.log('deleted');
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }

  addEmployee(employee: Employee) {
    console.log(employee);
    //const index=this.employees.indexOf(employee)
    this.employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(this.employees));
  }
}
