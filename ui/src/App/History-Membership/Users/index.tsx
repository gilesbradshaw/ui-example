import React,
{
  FunctionComponent,
  useState,
} from 'react'
import {
  Route,
  RouteComponentProps,
} from 'react-router-dom'
// import UserIcon from './User/Icon'
import queryString from 'query-string'
import InfiniteList from '../../util/Infinite-List'

import Item from './User'

import Row from './Row'
import Header from './Header'
// import User from './User'
import query from './query'
import {
  HistoryMembershipUsers as Nodes,
  HistoryMembershipUsers_historyMembership_users_edges_node as Node,
  HistoryMembershipUsers_historyMembership_users_edges as Edges,
} from '../../../generated/HistoryMembershipUsers'
import {
  EnumType_historyMembership_user_Indexes as EnumIndexes,
} from '../../../generated/globalTypes'
import strings from './strings'
//import User from './User'
//import Created from './Created'

import List from '../../List'

export default List<
  Node,
  Nodes,
  Edges,
  EnumIndexes
  >({
    Row,
    Header,
    Item,
    query,
    strings,
    itemHeight: 70,
  })
