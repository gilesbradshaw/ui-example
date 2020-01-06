import {
  useQuery,
} from '@apollo/react-hooks'
import {
  QueryResult
} from 'react-apollo'

export default 
  <Item ,Variables>(
    query: any,
    variables: Variables,
    fn: (
      result: QueryResult<
        Item,
        Variables
      >
    ) => any,
  ) => {
    return fn(
      useQuery<
        Item,
        Variables
      >(
        query,
        {
          notifyOnNetworkStatusChange: true,
          variables,
        },
      )
    )
}

