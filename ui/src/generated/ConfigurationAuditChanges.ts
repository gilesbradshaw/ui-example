/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type_configurationAudit_change_Input_Order, Type_configurationAudit_change_Input_Where } from "./globalTypes";

// ====================================================
// GraphQL query operation: ConfigurationAuditChanges
// ====================================================

export interface ConfigurationAuditChanges_configurationAudit_changes_pageInfo {
  __typename: "PageInfo";
  /**
   * Flag to denote end of all NODES
   */
  hasNextPage: boolean;
  /**
   * Last cursor
   */
  endCursor: string | null;
}

export interface ConfigurationAuditChanges_configurationAudit_changes_edges_node_user {
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

export interface ConfigurationAuditChanges_configurationAudit_changes_edges_node {
  __typename: "Type_configurationAudit_change";
  /**
   * unique id
   */
  id: number;
  user: ConfigurationAuditChanges_configurationAudit_changes_edges_node_user | null;
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

export interface ConfigurationAuditChanges_configurationAudit_changes_edges {
  __typename: "EdgeType_configurationAudit_change";
  /**
   * edge node
   */
  node: ConfigurationAuditChanges_configurationAudit_changes_edges_node | null;
  /**
   * Edge cursor
   */
  cursor: string;
}

export interface ConfigurationAuditChanges_configurationAudit_changes {
  __typename: "PageType_configurationAudit_change";
  /**
   * Total Count of rows
   */
  totalCount: number;
  pageInfo: ConfigurationAuditChanges_configurationAudit_changes_pageInfo;
  edges: (ConfigurationAuditChanges_configurationAudit_changes_edges | null)[] | null;
}

export interface ConfigurationAuditChanges {
  configurationAudit_changes: ConfigurationAuditChanges_configurationAudit_changes | null;
}

export interface ConfigurationAuditChangesVariables {
  first: number;
  after?: string | null;
  order?: (Type_configurationAudit_change_Input_Order | null)[] | null;
  where?: (Type_configurationAudit_change_Input_Where | null)[] | null;
}
