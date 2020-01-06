import { ParsedQuery } from 'query-string'
import setField from './set-field'

// set a query-string field to a value
export default ({
  query,
  type,
  value,
}:
  {
  query: ParsedQuery<string>;
  type: string;
  value: string;
  }
): ParsedQuery<string> => ({
  ...query,
  [type]: setField(
    query[type],
    value,
  )
})
