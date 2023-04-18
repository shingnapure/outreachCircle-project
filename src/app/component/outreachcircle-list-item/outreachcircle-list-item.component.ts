import { Component, Input, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { outreachcircleitem } from 'src/app/services/interface';

@Component({
  selector: 'app-outreachcircle-list-item',
  templateUrl: './outreachcircle-list-item.component.html',
  styleUrls: ['./outreachcircle-list-item.component.css'],
})
export class OutreachcircleListItemComponent {
  constructor(private routes:Router ,private services:DataService) {}

  @Input() outreachcircleitem : outreachcircleitem;
  groups(){
    this.routes.navigate([`user/${this.outreachcircleitem.code.value}/groups/${this.outreachcircleitem.id}`])
  }
}
