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

export interface InputLoginUser {
    login : {
      token: string;
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
    }
  }
}

export interface AllOuterCircleList {
  outreachCirclesByLoggedInUser : {
    items : outreachcircleitem[]
  }
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

export interface logOut{
  logout : boolean
}

export interface userbytoken {
  userByToken : {
    firstName : string
    lastName : string
    username : string
  }
  
}

