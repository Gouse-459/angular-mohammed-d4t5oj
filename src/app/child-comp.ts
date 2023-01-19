import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './AppService';
import { EmployeeModel } from './models';

@Component({
  selector: 'child',
  templateUrl: './child-comp.html',
})
export class ChildComponent implements OnInit {
  name = 'Employee Data';
  employeeList: EmployeeModel[] = [];
  times = 0;
  interval: any;

  constructor(private service: AppService, private router: Router) {}

  ngOnInit(): void {
    this.fetchEmployees();
    // this.employeeList.push({ name: 'Gouse', country: 'india' });
  }

  fetchEmployees(): void {
    this.interval = setInterval(() => {
      this.doApiCall();
      if (this.times >= 10) this.stopAPI(this.interval);
    }, 1000);
  }

  stopAPI(interval) {
    clearInterval(interval);
  }
  doApiCall(): void {
    this.getEmployee().then((response: Array<EmployeeModel>) => {
      console.log('data', response);
      this.times++;
      this.employeeList.push(response[0]);
      if (this.times == 10) this.stopAPI(this.interval);
    });
  }

  getEmployee(): Promise<Array<EmployeeModel>> {
    return this.service.getEmployee().toPromise();
  }

  openProfile(i: number): void {
    console.log('this.employeeList[i]', this.employeeList[i]);
    this.router.navigate([
      'employee',
      { data: JSON.stringify(this.employeeList[i]) },
    ]);
  }
}
