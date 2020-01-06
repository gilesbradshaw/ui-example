import { gql } from 'apollo-boost'

export default gql`
  query ConfigurationAuditChange($id: Int!) {
    configurationAudit_change(id: $id) {
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
