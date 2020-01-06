/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HistoryMembershipUserEvent
// ====================================================

export interface HistoryMembershipUserEvent_historyMembership_userEvent_user {
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

export interface HistoryMembershipUserEvent_historyMembership_userEvent_fields_edges_node {
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

export interface HistoryMembershipUserEvent_historyMembership_userEvent_fields_edges {
  __typename: "EdgeType_historyMembership_userEventField";
  /**
   * edge node
   */
  node: HistoryMembershipUserEvent_historyMembership_userEvent_fields_edges_node | null;
}

export interface HistoryMembershipUserEvent_historyMembership_userEvent_fields {
  __typename: "PageType_historyMembership_userEventField";
  edges: (HistoryMembershipUserEvent_historyMembership_userEvent_fields_edges | null)[] | null;
}

export interface HistoryMembershipUserEvent_historyMembership_userEvent {
  __typename: "Type_historyMembership_userEvent";
  /**
   * unique id
   */
  id: number;
  userId: number;
  user: HistoryMembershipUserEvent_historyMembership_userEvent_user | null;
  /**
   * type
   */
  type: string | null;
  /**
   * the date the entity was created
   */
  createdOn: Date;
  fields: HistoryMembershipUserEvent_historyMembership_userEvent_fields | null;
}

export interface HistoryMembershipUserEvent {
  historyMembership_userEvent: HistoryMembershipUserEvent_historyMembership_userEvent | null;
}

export interface HistoryMembershipUserEventVariables {
  id: number;
}
