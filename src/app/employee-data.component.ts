import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'emp-data',
  templateUrl: 'employee-data.component.html',
})
export class EmployeeData implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  employee :any;
  employeeList:any[]=[];
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((data: any) => {
      console.log('paramMap', data);
      console.log("data.get('data')", data?.get('data'));
      console.log(JSON.parse(data?.get('data')));
      this.employeeList.push(JSON.parse(data?.get('data')));
    });
  }
}
