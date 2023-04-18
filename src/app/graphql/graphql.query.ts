import { gql } from 'apollo-angular';

export const userByToken = gql`
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
  }
`;

export const landing = gql`
  query outreachCirclesByLoggedInUser($input: AllOutreachCirclesInput!) {
    outreachCirclesByLoggedInUser(input: $input) {
      total
      items {
        id
        name
        city
        state
        code {
          value
          __typename
        }
        logo {
          id
          url
          __typename
        }
        status {
          createdAndActivate
          setup {
            isAudienceCreated
            isActionCreated
            hasSupporter
            __typename
          }
          __typename
        }
        supporterCount
        actionCount
        groupsCount
        aliasCount
        activeSupportersCount
        liveActionsCount
        __typename
      }
      __typename
    }
  }
`;

export const allGroup=gql`
query getGroupsByOutreachCircle($input: GetGroupsInput!) {
  getGroupsByOutreachCircle(input: $input) {
    items {
      id
      name
      supporterCount
      actionCount
      aliasCount
      __typename
    }
    total
    __typename
  }
}
`

export const individualGroup=gql`
query group($id: ID!) {
  group(id: $id) {
    id
    name
    supporterCount
    actionCount
    aliasCount
    aliases {
      id
      value
      supporterCount
      name
      sharableUrl
      __typename
    }
    actions {
      total
      items {
        id
        type
        name
        status
        __typename
      }
      __typename
    }
    __typename
  }
}
`
