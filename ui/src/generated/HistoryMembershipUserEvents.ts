/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Type_historyMembership_userEvent_Input_Order, Type_historyMembership_userEvent_Input_Where } from "./globalTypes";

// ====================================================
// GraphQL query operation: HistoryMembershipUserEvents
// ====================================================

export interface HistoryMembershipUserEvents_historyMembership_userEvents_pageInfo {
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

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_user {
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
   * Full name
   */
  fullName: string | null;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields_edges_node {
  __typename: "Type_historyMembership_userEventField";
  /**
   * the name of the entity
   */
  name: string;
  /**
   * the value
   */
  value: string | null;
  /**
   * unique id
   */
  id: number;
  eventId: number;
  /**
   * unique (to database) timestamp
   */
  timestamp: string;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields_edges {
  __typename: "EdgeType_historyMembership_userEventField";
  /**
   * edge node
   */
  node: HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields_edges_node | null;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields {
  __typename: "PageType_historyMembership_userEventField";
  edges: (HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields_edges | null)[] | null;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges_node {
  __typename: "Type_historyMembership_userEvent";
  /**
   * unique id
   */
  id: number;
  userId: number;
  user: HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_user | null;
  /**
   * type
   */
  type: string | null;
  /**
   * the date the entity was created
   */
  createdOn: Date;
  fields: HistoryMembershipUserEvents_historyMembership_userEvents_edges_node_fields | null;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents_edges {
  __typename: "EdgeType_historyMembership_userEvent";
  /**
   * edge node
   */
  node: HistoryMembershipUserEvents_historyMembership_userEvents_edges_node | null;
  /**
   * Edge cursor
   */
  cursor: string;
}

export interface HistoryMembershipUserEvents_historyMembership_userEvents {
  __typename: "PageType_historyMembership_userEvent";
  /**
   * Total Count of rows
   */
  totalCount: number;
  pageInfo: HistoryMembershipUserEvents_historyMembership_userEvents_pageInfo;
  edges: (HistoryMembershipUserEvents_historyMembership_userEvents_edges | null)[] | null;
}

export interface HistoryMembershipUserEvents {
  historyMembership_userEvents: HistoryMembershipUserEvents_historyMembership_userEvents | null;
}

export interface HistoryMembershipUserEventsVariables {
  first: number;
  after?: string | null;
  order?: (Type_historyMembership_userEvent_Input_Order | null)[] | null;
  where?: (Type_historyMembership_userEvent_Input_Where | null)[] | null;
}
