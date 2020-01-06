import { gql } from 'apollo-boost'

export default gql`
  query HistoryMembershipUser(
    $id: Int!
  ) {
    historyMembership_user(
      id: $id
    ) {
      id
      userId
      name
      fullName
      email
      createdOn
      modifiedOn
      description
      events (first:0) {
        totalCount
      }
      membershipChanges (first:0) {
        totalCount
      }
      configurationChanges (first:0) {
        totalCount
      }
    }
  }
`
