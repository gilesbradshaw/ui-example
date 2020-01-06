import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipUserEvents(
    $first: Int!
    $after: String
    $order: [Type_historyMembership_userEvent_Input_Order]
    $where: [Type_historyMembership_userEvent_Input_Where]
  ) {
   historyMembership_userEvents(
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
          user {
            id,
            userId,
            fullName,
          }
          type
          createdOn
          fields(first:100) {
            edges {
              node {
                name
              value
              id
              eventId
              timestamp
              }
            }
          }
        }
        cursor
      }
    }
  }
`
