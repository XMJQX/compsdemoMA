import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {title: 'Why Is the Earth Round?', content: 'Because it is!'},
    {title: 'How is this component reusable?', content: 'becuase of the input Decorator, and directives'},
    {title: 'What am i learning about angular?', content: 'A LOT!'},
    {title: 'Is coding fun?', content: "You didn't specify which language, front or back end, the deps,the class, the interface,  the method, and the unit tests. This question will not make it to production."}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.modalOpen = !this.modalOpen
  }
}
