import { ParsedQuery } from 'query-string'

// get an item from the query string
export default (
  query: ParsedQuery<string>,
  type: string,
  name: string,
): string => {
  console.log({
    query,
    type,
    name,
  })
  if (query[type]) {
    if(Array.isArray(query[type])) {
      console.log('array', (query[type] as string[])
      .find(
        s =>
          s.split('..')[0] === name
      ) || 'dhdhhd')
      return (query[type] as string[])
        .find(
          s =>
            s.split('..')[0] === name
        ) || ''
    }
    if (
      (query[type] as string).split('..')[0] === name
    ) {
      return query[type] as string
    }
  }
  return ''
}