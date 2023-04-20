import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  groupName:string=''
  groupId:string=''
  token: string = '_vc_token';
  constructor() {
  }

  editGroup(id:string,name:string){
     this.groupName=name
     this.groupId=id
  }
  getEditGroup(){
    return {name:this.groupName,id:this.groupId}
  }
}
