import { Injectable } from '@angular/core';
import { Apollo} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  
    constructor(private apollo:Apollo) { }


    getData(query , variables , context = {}){
      return this.apollo.query<any>({
        query,
        context ,
        variables
      })
    }
    

    setData(data , variables){
      return this.apollo.mutate<any>({
        mutation : data,
        variables
      })
    }
    


    
}
