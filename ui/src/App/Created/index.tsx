import React, {
  FunctionComponent,
  useState,
} from 'react'
import Moment from 'react-moment'
import queryString, {
  ParsedQuery,
} from 'query-string'
import {
  RouteComponentProps,
} from 'react-router'
import {
  withRouter,
} from 'react-router-dom'

import set from '../util/query-string/set'

import Calendar from './Calendar'
import CalendarIcon from './Calendar/Icon'
import Row from '../util/styled/Row'
import Cell from '../util/styled/Cell'
import Link from '../util/styled/Link'
import {
  Up,
  Down,
 } from 'ui-icons'
import doWhere from '../util/query-string/do'

const Created: FunctionComponent<
  RouteComponentProps
> = (
  {
    match: {
      url,
    },
    location: {
      search,
    },
    children,
    history,
  },
) => {
  const [
    select,
    setSelect
  ] = useState<boolean>(
    false,
  )

  const {
    order,
    where,
   } = queryString
    .parse(
      decodeURIComponent(search),
    )
  const createdOrder = (Array.isArray(order) ? order : [order])
    .find(
      s =>
        (s || '')
          .split('..')[0] === 'createdOn'
    )
  const createdWhere = (Array.isArray(where) ? where : [where])
    .find(
      s =>
        (s || '')
          .split('..')[0] === 'createdOn'
    )
    ?.split('..')
    ?.[2]
  
  console.log((Array.isArray(where) ? where : [where])
    .find(
      s =>
        (s || '')
          .split('..')[0] === 'createdOn'
    ))
    console.log({ where, createdWhere })
 
  
  const ascending = !createdOrder ||
    createdOrder
      .split('..')[1] !== 'desc'
  
  return <Row>
    <Calendar
      {...{
        select,
        setSelect,
        search,
        onChange: (d: Date | Date[] | null): void => {
          console.log({ ascending, createdOrder })
          if (
            d &&
            !Array
              .isArray(
                d,
              )
          ) {

            const h = `${url}?${
              queryString
                .stringify(
                  set({
                    query: queryString
                      .parse(
                        decodeURIComponent(search),
                      ),
                    type: 'where',
                    value: `createdOn..${
                      ascending
                        ? 'le'
                        : 'ge'
                    }..${d.toISOString()}`,
                })
              )
            }`
            history.push(
              h,
            )
          }
        }
      }}
    />
    {
        ascending
          ? <Link
          {...{
            to: `?${
              queryString
                .stringify({
                  ...doWhere('createdOn')(
                    queryString
                    .parse(
                      decodeURIComponent(search),
                    ),
                  ),
                  order: 'createdOn..desc',
                })}`
          }}
          >
            <Up
              crossOrigin={true}
            />
          </Link>
          : <Link
            {...{
              to: `?${
                queryString
                  .stringify({
                    ...doWhere('createdOn')(
                      queryString
                      .parse(
                        decodeURIComponent(search),
                      ),
                    ),
                    order: 'createdOn'
                  })}`
            }}
          >
            <Down
              crossOrigin={false}
            />
          </Link>
      }
    <Row>

    </Row>
      <Cell>
        <CalendarIcon
          {...{
            size: 20,
            onClick: () =>
              setSelect(true),
          }}
        />
      </Cell>
      <Cell>
        {
          createdWhere
            ?
            <Moment
              {...{
                format: 'DD MMM YY ZZ'
              }}
            >
              {createdWhere}
            </Moment>
          :children
        }
      </Cell>
    </Row>
}

export default withRouter(
  Created,
)
