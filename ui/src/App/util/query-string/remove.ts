import { ParsedQuery } from 'query-string'
import removeField from './remove-field'

// remove a value from query-string field
export default (
  {
    type,
    value,
    query,
  }: 
  {
  query: ParsedQuery<string>,
  type: string,
  value: string
}): ParsedQuery<string> => ({
  ...query,
  [type]: removeField(
    query[type],
    value,
  )
})
