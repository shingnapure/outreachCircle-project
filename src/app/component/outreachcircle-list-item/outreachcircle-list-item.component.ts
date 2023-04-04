import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-outreachcircle-list-item',
  templateUrl: './outreachcircle-list-item.component.html',
  styleUrls: ['./outreachcircle-list-item.component.css']
})

export class OutreachcircleListItemComponent {

  constructor() { }

  @Input() outreachcircleitem;
}
