import React from 'react'
import queryString from 'query-string'
import set from '../../../util/query-string/set'
import Link from '../../../util/styled/Link'

export default (
  {
    search,
    type,
    setSelect,
  }: {
    search?: string;
    type: string;
    setSelect: (set: boolean) => void;
  }
) =>
  <Link
    {...{
      height: '30px',
      onClick: () =>
        setSelect(
          false,
        ),
      to: `?${queryString
        .stringify(
          set({
            value: `type..e..${type}`,
            type: 'where',
            query: queryString
              .parse(
                decodeURIComponent(search || ''),
              ),
          })
        )
      }`,
    }}
  >
    {type}
  </Link>