import getEnum from './get-enum'
import {
  EnumType_Comparision as EnumComparison
} from '../../generated/globalTypes'

export default <
  T extends string
  >(
  where: string[] |
    string |
    null |
    undefined,
  ) => (
  where
    ? (
        Array
          .isArray(
            where
          )
          ? where
            .map(
              s => ({
                field: getEnum<T>(s.split('..')[0]),
                is: getEnum<EnumComparison>(s.split('..')[1]),
                to: s.split('..')[2],
              })
            )
          : [
            {
              field: getEnum<T>(where.split('..')[0]),
              is: getEnum<EnumComparison>(where.split('..')[1]),
              to: where.split('..')[2],
            }
          ]
      )
    : []
  )