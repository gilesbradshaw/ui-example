// @ts-nocheck
import React, { FunctionComponent } from 'react'

import InfiniteList from '../../util/Infinite-List'
import query from './query'

import {
  HistoryMembershipUsers as Nodes,
  HistoryMembershipUsers_historyMembership_users_edges_node as Node,
  HistoryMembershipUsers_historyMembership_users_edges as Edges,
  HistoryMembershipUsersVariables as Variables,
  HistoryMembershipUsers_historyMembership_users_pageInfo as PageInfo
} from '../../../generated/HistoryMembershipUsers'
import {
  EnumType_historyMembership_user_Indexes as EnumIndexes,
} from '../../../generated/globalTypes'
import strings from './strings'

const InnerUsers: FunctionComponent<{
  search?: string;
  itemHeight: number;
  render?: (node: Node, index: number) => any;
}> = ({
    search = '',
    render,
    itemHeight,
}) =>
  <>
    <InfiniteList<
      Node,
      Nodes,
      Edges,
      EnumIndexes
    >
      {...{
        ...strings,
        query,
        render,
        search,
        itemHeight,
      }}
    />
  </>

export default InnerUsers
