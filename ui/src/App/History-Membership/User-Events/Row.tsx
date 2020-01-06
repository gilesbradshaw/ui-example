import React from 'react'
import {
  HistoryMembershipUserEvents_historyMembership_userEvents_edges_node as Node,
} from '../../../generated/HistoryMembershipUserEvents'

import Row from '../../util/styled/Row'
import Cell from '../../util/styled/Cell'
import List from '../../util/styled/List'
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
      height: '70px',
      width: '100%',
      style: {
        backgroundColor: 'red',
      }
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
        style: {
          backgroundColor: 'red',
        },
      }}
    >
      {node?.user?.fullName}
    </Cell>
    <Cell
      {...{
        style: {
          backgroundColor: 'yellow',
        },
        width: '200px',
      }}
    >
      {node?.createdOn}
    </Cell>
    <Cell
      {...{
        width: '200px',
        style: {
          backgroundColor: 'pink',
        },
      }}
    >
      {node?.type}
    </Cell>
    <Row
      {...{
        proportion: 2,
        style: {
          backgroundColor: 'green',
        }
      }}
    >
      {
        node
          ?.fields
          ?.edges
          ?.filter(
            (edge) =>
              ![
                'lock',
                'text',
                'date',
              ]
                .includes(
                  edge
                    ?.node
                    ?.name || ''
                ) 
          )
          ?.map(
            (edge) => <List
              {...{
                proportion: 1,
                key: edge?.node?.id
              }}
            >
              <div>
                {edge?.node?.name}
              </div>
              <div>
                {edge?.node?.value}
              </div> 
            </List>
          )
      }
    </Row>
  </Row>
