import { gql } from "apollo-angular";

const userByToken = gql`
query userByToken($token: String!) {
    userByToken(token: $token) {
      id
      username
      firstName
      lastName
      isVerified
      uiPreferences
      outreachCircleCodes
      allowAccessToOrganization
      __typename
    }
  }`

  export default userByToken 