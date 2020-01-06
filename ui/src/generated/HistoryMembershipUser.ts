/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HistoryMembershipUser
// ====================================================

export interface HistoryMembershipUser_historyMembership_user_events {
  __typename: "PageType_historyMembership_userEvent";
  /**
   * Total Count of rows
   */
  totalCount: number;
}

export interface HistoryMembershipUser_historyMembership_user_membershipChanges {
  __typename: "PageType_historyMembership_change";
  /**
   * Total Count of rows
   */
  totalCount: number;
}

export interface HistoryMembershipUser_historyMembership_user_configurationChanges {
  __typename: "PageType_configurationAudit_change";
  /**
   * Total Count of rows
   */
  totalCount: number;
}

export interface HistoryMembershipUser_historyMembership_user {
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
  events: HistoryMembershipUser_historyMembership_user_events | null;
  membershipChanges: HistoryMembershipUser_historyMembership_user_membershipChanges | null;
  configurationChanges: HistoryMembershipUser_historyMembership_user_configurationChanges | null;
}

export interface HistoryMembershipUser {
  historyMembership_user: HistoryMembershipUser_historyMembership_user | null;
}

export interface HistoryMembershipUserVariables {
  id: number;
}
