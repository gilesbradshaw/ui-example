/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type_historyMembership_user_Input_Order, Type_historyMembership_user_Input_Where } from "./globalTypes";

// ====================================================
// GraphQL query operation: HistoryMembershipUsers
// ====================================================

export interface HistoryMembershipUsers_historyMembership_users_pageInfo {
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

export interface HistoryMembershipUsers_historyMembership_users_edges_node {
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
   * the date the entity was created
   */
  createdOn: Date;
  /**
   * the date the entity was created
   */
  modifiedOn: Date;
  /**
   * the description of the entity
   */
  description: string | null;
}

export interface HistoryMembershipUsers_historyMembership_users_edges {
  __typename: "EdgeType_historyMembership_user";
  /**
   * edge node
   */
  node: HistoryMembershipUsers_historyMembership_users_edges_node | null;
  /**
   * Edge cursor
   */
  cursor: string;
}

export interface HistoryMembershipUsers_historyMembership_users {
  __typename: "PageType_historyMembership_user";
  /**
   * Total Count of rows
   */
  totalCount: number;
  pageInfo: HistoryMembershipUsers_historyMembership_users_pageInfo;
  edges: (HistoryMembershipUsers_historyMembership_users_edges | null)[] | null;
}

export interface HistoryMembershipUsers {
  historyMembership_users: HistoryMembershipUsers_historyMembership_users | null;
}

export interface HistoryMembershipUsersVariables {
  first: number;
  after?: string | null;
  order?: (Type_historyMembership_user_Input_Order | null)[] | null;
  where?: (Type_historyMembership_user_Input_Where | null)[] | null;
}
