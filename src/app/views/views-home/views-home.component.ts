import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    {value: 50, label: "Number of Active Users"},
    {value: 920, label: 'reasons to go for a walk in Colorado'},
    {value: 100, label: 'OIT Satisfaction Rate'}
  ]
  items = [
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'This is a fantastic Couch!'
    },
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'This is a dresser. Pretty basic but great at its job!'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
