import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {

  data = [
    {name: 'Mariah', age: 24, job: 'UI Designer', EmploymentType: 'Contractor'},
    {name: 'Mohammad', age: 21, job: 'Developer', EmploymentType: 'Full Time'},
    {name: 'John', age: 32, job: 'Accountant', EmploymentType: 'Part Time'},
    {name: 'Elijah', age: 19, job: 'QA Tester', EmploymentType: 'Intern'},
  ]

  headers = [
    {key: 'EmploymentType', label: 'Employment Type'},
    {key: 'name', label: 'Name'},
    {key: 'age', label: 'Age'},
    {key: 'job', label: 'Job'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
