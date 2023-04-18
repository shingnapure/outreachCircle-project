import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService  implements OnInit{
  token: string = 'oc_token';
  constructor() {
  }
  ngOnInit(): void {
      
    }
    

}
