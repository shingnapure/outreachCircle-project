import { Component, Input, OnInit } from '@angular/core';
import { outreachcircleitem } from 'src/app/services/interface';

@Component({
  selector: 'app-outreachcircle-list-item',
  templateUrl: './outreachcircle-list-item.component.html',
  styleUrls: ['./outreachcircle-list-item.component.css'],
})
export class OutreachcircleListItemComponent {
  constructor() {}

  @Input() outreachcircleitem : outreachcircleitem;

}
