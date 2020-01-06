/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type_historyMembership_change_Input_Order, Type_historyMembership_change_Input_Where } from "./globalTypes";

// ====================================================
// GraphQL query operation: HistoryMembershipChanges
// ====================================================

export interface HistoryMembershipChanges_historyMembership_changes_pageInfo {
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

export interface HistoryMembershipChanges_historyMembership_changes_edges_node_user {
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

export interface HistoryMembershipChanges_historyMembership_changes_edges_node {
  __typename: "Type_historyMembership_change";
  /**
   * unique id
   */
  id: number;
  user: HistoryMembershipChanges_historyMembership_changes_edges_node_user | null;
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

export interface HistoryMembershipChanges_historyMembership_changes_edges {
  __typename: "EdgeType_historyMembership_change";
  /**
   * edge node
   */
  node: HistoryMembershipChanges_historyMembership_changes_edges_node | null;
  /**
   * Edge cursor
   */
  cursor: string;
}

export interface HistoryMembershipChanges_historyMembership_changes {
  __typename: "PageType_historyMembership_change";
  /**
   * Total Count of rows
   */
  totalCount: number;
  pageInfo: HistoryMembershipChanges_historyMembership_changes_pageInfo;
  edges: (HistoryMembershipChanges_historyMembership_changes_edges | null)[] | null;
}

export interface HistoryMembershipChanges {
  historyMembership_changes: HistoryMembershipChanges_historyMembership_changes | null;
}

export interface HistoryMembershipChangesVariables {
  first: number;
  after?: string | null;
  order?: (Type_historyMembership_change_Input_Order | null)[] | null;
  where?: (Type_historyMembership_change_Input_Where | null)[] | null;
}
