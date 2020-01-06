import React from 'react'
import Moment from '../../util/styled/Moment'

import {
  HistoryMembershipChanges_historyMembership_changes_edges_node as Node,
} from '../../../generated/HistoryMembershipChanges'

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
          to: `./${node.id}${search}`,
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
      {node?.user?.fullName}
    </Cell>
    <Cell
      {...{
        width: '200px',
      }}
    >
      <Moment>
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
    <Cell
      {...{
        proportion: 1,
      }}
    >
      <Row>
        {
          (node.changes as unknown as { __$table: string }[])
            .map(
              ({ __$table: t }) =>
                t
            )
            .reduce(
              (acc, t) => [
                ...acc,
                ...(
                  acc
                    .includes(t)
                    ? []
                    : [t]
                ),
              ],
              [] as string[],
            )
            .filter(
              t =>
                t !== 'user',
            )
            .map(
              (t, key) =>
                <Cell
                  {...{
                    key,
                    height: '30px',
                  }}
                >
                  {t}
                </Cell>,
            )
        }
      </Row>
    </Cell>
  </Row>
