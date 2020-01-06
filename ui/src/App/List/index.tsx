import React,
{
  FunctionComponent,
} from 'react'
import {
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import queryString from 'query-string'
import InfiniteList from '../util/Infinite-List'
import { Parameters } from './types/Parameters'

export default <
  Node extends {
    id: number;
  },
  Nodes,
  Edges,
  EnumIndexes extends string,
  >(
    {
      Row,
      Header,
      Item,
      strings,
      query,
      itemHeight,
    }: Parameters<
      Node
    >
  ): FunctionComponent<
    RouteComponentProps
  > => ({
    match: {
      path,
      url,
    },
    location: {
      search,
    },
  }) => {
    return <>
      <Header
        {...{
          search,
          url,
        }}
      />
      <InfiniteList<
        Node,
        Nodes,
        Edges,
        EnumIndexes
      >
        {...{
          itemHeight,
          search: queryString
            .stringify({
              order: 'createdOn...desc',
              ...queryString
                .parse(
                  decodeURIComponent(search),
                )
            }),
          query,
          ...strings,
          render: (node: Node) =>
            <Row
              {...{
                key: node.id,
                search,
                node,
              }}
            />
        }}
      />
      <Route
        path={`${path}/:id`}
        component={Item}
      />
    </>
  }
