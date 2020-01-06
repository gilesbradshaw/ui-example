import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipUsers(
    $first: Int!
    $after: String
    $order: [Type_historyMembership_user_Input_Order]
    $where: [Type_historyMembership_user_Input_Where]
  ) {
    historyMembership_users(
      first: $first
      after: $after
      order: $order
      where: $where
    ) {
      totalCount
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          userId
          name
          fullName
          email
          createdOn
          modifiedOn
          description
        }
        cursor
      }
    }
  }
`
