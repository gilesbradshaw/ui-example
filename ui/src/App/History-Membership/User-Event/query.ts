import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipUserEvent(
    $id: Int!
  ) {
   historyMembership_userEvent(
      id: $id
    ) {
      id
      userId
      user {
        id
        userId
        fullName
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
  }
`
