/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ConfigurationAuditChange
// ====================================================

export interface ConfigurationAuditChange_configurationAudit_change_user {
  __typename: "Type_historyMembership_user";
  /**
   * unique id
   */
  id: number;
  /**
   * user id
   */
  userId: number;
  /**
   * the name of the entity
   */
  name: string;
  /**
   * Full name
   */
  fullName: string | null;
  /**
   * Email
   */
  email: string | null;
  /**
   * the description of the entity
   */
  description: string | null;
}

export interface ConfigurationAuditChange_configurationAudit_change {
  __typename: "Type_configurationAudit_change";
  /**
   * unique id
   */
  id: number;
  user: ConfigurationAuditChange_configurationAudit_change_user | null;
  /**
   * the changes
   */
  changes: JSON;
  /**
   * date
   */
  date: Date | null;
  /**
   * unique (to database) timestamp
   */
  timestamp: string;
  /**
   * the date the entity was created
   */
  createdOn: Date;
  /**
   * the description of the entity
   */
  description: string | null;
  /**
   * the date the entity was created
   */
  modifiedOn: Date;
}

export interface ConfigurationAuditChange {
  configurationAudit_change: ConfigurationAuditChange_configurationAudit_change | null;
}

export interface ConfigurationAuditChangeVariables {
  id: number;
}
