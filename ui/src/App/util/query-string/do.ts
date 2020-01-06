import { ParsedQuery } from 'query-string'
import set from './set'
import get from './get'

// this changes where between ge and le based on order..
export default (field: string): (
  (query: ParsedQuery<string>) => ParsedQuery<string>
) =>
  (query: ParsedQuery<string>) => {
    const value = get(query, 'where', field)
    if (!value) {
      return query
    }
    if (
      get(
        query,
        'order',
        field,
      )
        .split('..')[1] === 'desc'
    ) {
      return set({
        query,
        type: 'where',
        value: `${field}..le..${value.split('..')[2]}`
      })
    }
    return set({
      query,
      type: 'where',
      value: `${field}..ge..${value.split('..')[2]}`
    })
  }

