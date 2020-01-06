/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: HistoryMmembershipChangesUpdated
// ====================================================

export interface HistoryMmembershipChangesUpdated_historyMembership_changes_updated_item_user {
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
}

export interface HistoryMmembershipChangesUpdated_historyMembership_changes_updated_item {
  __typename: "Type_historyMembership_change";
  /**
   * unique id
   */
  id: number;
  user: HistoryMmembershipChangesUpdated_historyMembership_changes_updated_item_user | null;
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

export interface HistoryMmembershipChangesUpdated_historyMembership_changes_updated {
  __typename: "Type_historyMembership_change_updated";
  item: HistoryMmembershipChangesUpdated_historyMembership_changes_updated_item | null;
  operation: string;
}

export interface HistoryMmembershipChangesUpdated {
  historyMembership_changes_updated: HistoryMmembershipChangesUpdated_historyMembership_changes_updated | null;
}
