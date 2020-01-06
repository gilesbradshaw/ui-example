import { useQuery } from '@apollo/react-hooks'
import { ApolloQueryResult } from 'apollo-client'
import queryString from 'query-string'

import Use from '../types/Use'

import getWhere from './get-where'
import getOrder from './get-order'
import {
  EnumType_Comparision as EnumComparison
} from '../../generated/globalTypes'

import PageInfo from '../types/Page-Info'

type params = {
  nodesName: string;
  pageType: string;
  query: any;
}

export default <
  Node,
  Nodes,
  Edges,
  EnumIndexes extends string
>({
    nodesName,
    pageType,
    query,
}: params) =>
  (
    search: string,
  ): Use<Nodes, Node> => {
    type Got = {
      edges?: Edges[];
      pageInfo: PageInfo;
      totalCount: number;
    } | undefined

    const get: (nodes?: Nodes) => Got =
      (nodes?: Nodes) =>
       
        // @ts-ignore
        nodes?.[nodesName] as Got
    const {
      order,
      where
    } =
      queryString
        .parse(
          decodeURIComponent(
            search,
          ),
        )
    const variables = {
      first: 30,
      order: getOrder<
        EnumIndexes
      >(
        order,
      ),
      where: getWhere<
        EnumIndexes
      >(
        where,
      ),
    }
  console.log({
    variables,
    search: queryString
      .parse(
        decodeURIComponent(
          search,
        ),
      ),
    })
    const {
      data,
      loading,
      fetchMore,
    } = useQuery<
      Nodes,
      {
        first: number;
        after?: string;
        order?: {
          field: EnumIndexes;
          desc?: boolean;
        }[],
        where?: {
          field: EnumIndexes;
          is: EnumComparison;
          to?: string;
        }[]
      }
    >(
      query,
      {
        notifyOnNetworkStatusChange: true,
        variables,
      },
    )
    const edges = get(data)
    if (
      // @ts-ignore
      !edges
    ) {
      return {
        loading,
        nodes: [],
      }
    }
    

    const loadMore = () => {
      return fetchMore({
        query,
        // notifyOnNetworkStatusChange: true,
        variables: {
          ...variables,
          after: edges
            ?.pageInfo
            .endCursor,
        },
        updateQuery: (
          previousResult: Nodes,
          {
            fetchMoreResult,
          }: {
            fetchMoreResult?: Nodes | undefined;
          },
        ): Nodes => {

          const newEdges = get(
            fetchMoreResult,
          )

          if (
            !newEdges
              ?.edges
              ?.length
          ) {
            return previousResult
          }
          const previousEdges = get(
            previousResult,
          )
          const toRet = {
            // @ts-ignore
            [nodesName]: {
            ...newEdges,
            __typename: pageType,
            edges: [
              ...previousEdges
                ?.edges ||
                [],
                ...newEdges
                  .edges
              ],
            },
          }
          return toRet as unknown as  Nodes
        },
      })
    }

    return {
      nodes: edges
        ?.edges
        ?.filter(
          e =>
            e,
        )
        // @ts-ignore
        ?.map(({ node }) => node),
      hasNextPage: edges
        ?.pageInfo
        .hasNextPage,
      loading,
      loadMore,
      totalCount: edges
        .totalCount
    }
  }
