import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipChange($id: Int!) {
    historyMembership_change(id: $id) {
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
  }
`
