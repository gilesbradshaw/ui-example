import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipChanges(
    $first: Int!
    $after: String
    $order: [Type_historyMembership_change_Input_Order]
    $where: [Type_historyMembership_change_Input_Where]
  ) {
    historyMembership_changes(
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
          user {
            id
            userId
            name
            fullName
            email
            description
          }
          changes
          date
          timestamp
          createdOn
          description
          modifiedOn
        }
        cursor
      }
    }
  }
`
