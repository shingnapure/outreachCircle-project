import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { mutationResultType, queryResultType } from './interface';
import { DocumentNode } from 'graphql';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  token: string = '_vc_token';
  constructor(private apollo: Apollo) {}

  getData(query: DocumentNode, variables: Object, context = {}) {
    return this.apollo.query<queryResultType>({
      query,
      context,
      variables,
    });
  }

  setData(data : DocumentNode, variables: Object) {
    return this.apollo.mutate<mutationResultType>({
      mutation: data,
      variables,
    });
  }

  logOut(mutate : DocumentNode, context = {}) {
    return this.apollo.mutate<mutationResultType>({
      mutation: mutate,
      context,
    });
  }
}
