import getEnum from './get-enum'

export default <
  T extends string
>(
  order: string[] |
    string |
    null |
    undefined,
) => (
  order
    ? (
        Array
          .isArray(
            order
          )
          ? order
            .map(
              s => ({
                field: getEnum<T>(s.split('..')[0]),
                descending: s.split('..')[1] === 'desc',
              })
            )
          : [
            {
              field: getEnum<T>(order.split('..')[0]),
              descending: order.split('..')[1] === 'desc',
            }
          ]
      )
    : []
)
