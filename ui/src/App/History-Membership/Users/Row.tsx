import React from 'react'
import Moment from 'react-moment'
import {
  HistoryMembershipUsers_historyMembership_users_edges_node as Node,
} from '../../../generated/HistoryMembershipUsers'

import Row from '../../util/styled/Row'
import Cell from '../../util/styled/Cell'
import Link from '../../util/styled/Link'

export default (
  { node, search }
  : {
    node: Node;
    search: string;
  }
) =>
  <Row
    {...{
      key: node.id,
    }}
  >
    <Cell
      {...{
        width: '50px',
      }}
    >
      <Link
        {...{
          to: `${node.id}`,
        }}
      >
        {node.id}
      </Link>
    </Cell>
    <Cell
      {...{
        width: '50px',
      }}
    >
      <Link
        {...{
          to: `../user-events/?where=userId..e..${node.id}`,
        }}
      >
        {node.id}
      </Link>
    </Cell>
    <Cell
      {...{
        width: '200px',
        height: '30px',
      }}
    >
      {node?.fullName}
    </Cell>
    <Cell
      {...{
        width: '200px',
      }}
    >
      <Moment
        {...{
          format: 'DD MMM YY hh:mm:ss ZZ'
        }}
      >
        {node?.createdOn}
      </Moment>
    </Cell>
    <Cell
      {...{
        width: '300px',
      }}
    >
      {node?.description}
    </Cell>
  </Row>
