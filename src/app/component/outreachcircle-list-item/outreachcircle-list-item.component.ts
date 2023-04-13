import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { outreachcircleitem } from 'src/app/services/interface';

@Component({
  selector: 'app-outreachcircle-list-item',
  templateUrl: './outreachcircle-list-item.component.html',
  styleUrls: ['./outreachcircle-list-item.component.css'],
})
export class OutreachcircleListItemComponent {
  constructor(private routes:Router , private activeRouter : ActivatedRoute) {}

  @Input() outreachcircleitem : outreachcircleitem;

  groups(){
    console.log(this.outreachcircleitem.code.value)
    console.log(`home/user/${this.outreachcircleitem.code.value}/groups`);
    this.routes.navigate([`user/${this.outreachcircleitem.code.value}/groups`])
  }
}
