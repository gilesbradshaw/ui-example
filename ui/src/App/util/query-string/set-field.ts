export default (
  field: string | string[] | undefined | null,
  value: string,
): string | string[] => {
  if (!field) {
    return value
  }
  if (!Array.isArray(field)) {
    if (field.split('..')[0] !== value.split('..')[0]) {
      return [
        field,
        value,
      ]
    } else {
      console.log('field setr to ', value)
      return value
    }
  }
  return [
    ...field
      .filter(
        f =>
          f.split('..')[0] !== value.split('..')[0]
      ),
    value,
  ]
}
