/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * comparision
 */
export enum EnumType_Comparision {
  e = "e",
  ge = "ge",
  gt = "gt",
  le = "le",
  lt = "lt",
  ne = "ne",
}

/**
 * order specification for configurationAudit change
 */
export enum EnumType_configurationAudit_change_Indexes {
  createdOn = "createdOn",
  id = "id",
  userId = "userId",
}

/**
 * order specification for historyMembership change
 */
export enum EnumType_historyMembership_change_Indexes {
  createdOn = "createdOn",
  id = "id",
  userId = "userId",
}

/**
 * order specification for historyMembership userEvent
 */
export enum EnumType_historyMembership_userEvent_Indexes {
  createdOn = "createdOn",
  id = "id",
  type = "type",
  userId = "userId",
}

/**
 * order specification for historyMembership user
 */
export enum EnumType_historyMembership_user_Indexes {
  createdOn = "createdOn",
  fullName = "fullName",
  id = "id",
  name = "name",
  userId = "userId",
}

export interface Type_configurationAudit_change_Input_Order {
  descending?: boolean | null;
  field?: EnumType_configurationAudit_change_Indexes | null;
}

export interface Type_configurationAudit_change_Input_Where {
  field?: EnumType_configurationAudit_change_Indexes | null;
  is?: EnumType_Comparision | null;
  to?: string | null;
}

export interface Type_historyMembership_change_Input_Order {
  descending?: boolean | null;
  field?: EnumType_historyMembership_change_Indexes | null;
}

export interface Type_historyMembership_change_Input_Where {
  field?: EnumType_historyMembership_change_Indexes | null;
  is?: EnumType_Comparision | null;
  to?: string | null;
}

export interface Type_historyMembership_userEvent_Input_Order {
  descending?: boolean | null;
  field?: EnumType_historyMembership_userEvent_Indexes | null;
}

export interface Type_historyMembership_userEvent_Input_Where {
  field?: EnumType_historyMembership_userEvent_Indexes | null;
  is?: EnumType_Comparision | null;
  to?: string | null;
}

export interface Type_historyMembership_user_Input_Order {
  descending?: boolean | null;
  field?: EnumType_historyMembership_user_Indexes | null;
}

export interface Type_historyMembership_user_Input_Where {
  field?: EnumType_historyMembership_user_Indexes | null;
  is?: EnumType_Comparision | null;
  to?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
