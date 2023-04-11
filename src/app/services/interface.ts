export interface Countrydata {
  country: string;
  code: string;
  isSelected: boolean;
}

export interface Search {
  name: string;
  adminFirstName: string;
  adminLastName: string;
}
export interface Filter {
  stateCodes: string[];
  isExclude: boolean;
}

export interface loginType {
    token: string;
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
    };
}

export interface outreachcircleitem {
  id: String;
  name: String;
  city: String;
  state: String;
  status?: Object;
  supporterCount?: Number;
  actionCount?: Number;
  groupsCount?: Number;
  aliasCount?: Number;
  activeSupportersCount?: Number;
  liveActionsCount?: Number;
}

// type of result data while doing mutation
export interface mutationResultType{
  login : loginType 
  logout : boolean
}

// type of result data while doing query
export interface queryResultType {
  userByToken : {
    firstName : string
    lastName : string
    username : string
  }
  outreachCirclesByLoggedInUser : {
    items : outreachcircleitem[]
  }
}

