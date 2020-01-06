export default (
  field: string | string[] | undefined | null,
  value: string,
): string | string[] | null => {
  console.log('remove', field, value)
  if (!field) {
    return null
  }
  if (!Array.isArray(field)) {
    if (field.split('..')[0] !== value.split('..')[0]) {
      console.log('field', field)
      return field
    } else {
      return null
    }
  }
  const ret = [
    ...field
      .filter(
        f =>
          f.split('..')[0] !== value.split('..')[0]
      ),
  ]
  console.log('ret', ret)
      
  return !ret.length
    ? null
    : !ret[1]
      ? ret[0]
      : ret
}
