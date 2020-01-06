/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: HistoryMembershipSelectedUser
// ====================================================

export interface HistoryMembershipSelectedUser_historyMembership_user {
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

export interface HistoryMembershipSelectedUser {
  historyMembership_user: HistoryMembershipSelectedUser_historyMembership_user | null;
}

export interface HistoryMembershipSelectedUserVariables {
  id: number;
}
