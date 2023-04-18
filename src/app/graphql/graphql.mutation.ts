import { gql } from 'apollo-angular';

export const Userlogin = gql`
  mutation login($user: SignupOrLoginInput!) {
    login(user: $user) {
      token
      user {
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
      __typename
    }
  }
`;

export const userLogout = gql`
  mutation {
    logout
  }
`;

export const createGroups = gql`
mutation createGroup($input: CreateGroupInput!) {
  createGroup(input: $input) {
    id
    name
    supporterCount
    aliasCount
    actionCount
    aliases {
      id
      name
      value
      supporterCount
      __typename
    }
    __typename
  }
}`
