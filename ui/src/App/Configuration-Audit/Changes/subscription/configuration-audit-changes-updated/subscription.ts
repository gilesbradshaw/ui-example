import { gql } from 'apollo-boost'

export default gql`
  subscription ConfigurationAuditChangesUpdated {
    configurationAudit_changes_updated {
      item {
        id
        user {
          id
          userId
          name
          fullName
          email
        }
        changes
        date
        timestamp
        createdOn
        description
        modifiedOn
      }
      operation
    }
  }
`
