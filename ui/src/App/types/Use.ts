import {
  ApolloQueryResult,
} from 'apollo-client'

export default interface Use<Nodes, Node> {
  nodes: Node[] | undefined;
  loading: boolean;
  hasNextPage?: boolean;
  loadMore?: () =>
    Promise<
      ApolloQueryResult<
        Nodes
      >
    >;
  totalCount?: number;
}
