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
  status?:  {
    createdAndActivate:boolean
  }
  code: {
    value:string
  }
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


export interface Groups{
  getGroupsByOutreachCircle:{
  items: {
    id:string
    name:string
    supporterCount:number
    actionCount:number
    aliasCount:number
  }
  }
}
export interface IndividualGroupActionLink{
  group: {
    id:string
    name:string
    supporterCount:number
    actionCount:number
    aliasCount:number
    aliases: {
      id:string
      value:string
      supporterCount:number
      name:string
      sharableUrl:string
    }
    actions: {
      total:number
      items :{
        id:string
        type:string
        name:string
        status:string
      }
    }
  }
}


export interface groupdata{
    id: String;
    name:String;
    supporterCount: Number;
    actionCount:Number;
    aliasCount:Number;
    aliases: [];
    actions: {
        total: Number;
        items: [
            {
                id:  String,
                type: String,
                name:  String,
                status:  String
            }
        ]
    }
}

