import React from 'react'
import queryString from 'query-string'
import Loading from '../Loading'
import Em from '../util/styled/Em'
import Div from '../util/styled/Div'
import {
  HistoryMembershipUsers as Nodes,
  HistoryMembershipUsers_historyMembership_users_edges_node as Node,
  HistoryMembershipUsers_historyMembership_users_edges as Edges,
  HistoryMembershipUsersVariables as Variables,
  HistoryMembershipUsers_historyMembership_users_pageInfo as PageInfo
} from '../../generated/HistoryMembershipUsers'
import {
  EnumType_historyMembership_user_Indexes as EnumIndexes,
} from '../../generated/globalTypes'

import uses from '../util/uses'
import query from '../History-Membership/Users/query'
import strings from '../History-Membership/Users/strings'

import Link from '../util/styled/Link'

import get from '../util/query-string/get'

export default (
  {
    search = '',
    field,
  }: {
    field: string;
    search?: string;
  }
) => {
  const userSearch = get(
    queryString
    .parse(
      decodeURIComponent(search),
    ),
    'where',
    'userId',
  )
  const newSearch = {
    ...queryString
      .parse(
        decodeURIComponent(search),
      ),
    order: null,
    where: userSearch
    ? `${field}..${
      userSearch
        .split('..')
        .slice(1, 3)
        .join('..')
    }`
    : null,
  }
  
  const {
    loading,
    nodes,
    ...rest
  } = uses<
    Node,
    Nodes,
    Edges,
    EnumIndexes
  >({
    ...strings,
    query,
  })(
    queryString
      .stringify(
        newSearch,
      ),
  )
  if (!userSearch) {
    return <Em>All</Em>
  }
  if (!userSearch.split('..')[2]) {
    return <Em>none</Em>
  }
  
  if (loading) {
    return <Loading />
  }
  if (!nodes || !nodes[0]) {
    return <Em>???</Em>
  }
  return <Div>
    <Link
      {...{
        to: `/admin/membership/users/${nodes[0].id}`
      }}
    >
      {nodes[0].fullName}
    </Link>
  </Div>
}
