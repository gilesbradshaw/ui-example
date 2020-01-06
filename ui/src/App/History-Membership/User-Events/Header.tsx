import React from 'react'
import queryString from 'query-string'
import UserIcon from '../../User/Icon'
import Row from '../../util/styled/Row'
import Em from '../../util/styled/Em'
import Header from '../../util/styled/Header'
import Cell from '../../util/styled/Cell'
import User from '../../User'
import Created from '../../Created'
import SelectUser from '../Users/Select-User'
import SelectType from './Select-Type'
import useState from '../../util/use-state'
import get from '../../util/query-string/get'

export default (
  {
    search,
    url,
  }: {
    search: string;
    url: string;
  }
) =>
  <>
    <Header>
      <Cell
        {...{
          style: {
            backgroundColor: 'orange',
          },
          width: '50px',
        }}
      >
        Id
      </Cell>
      <Row
        {...{
          style: {
            backgroundColor: 'red',
          },
          width: '200px',
        }}
      >
        {
          useState(
            false,
            (
              selectUser,
              setSelectUser,
            ) =>
              <>
                <SelectUser
                  {...{
                    url,
                    field: 'id',
                    setSelectUser,
                    selectUser,
                    search,
                  }}
                />
                <UserIcon
                  {...{
                    onClick: () => setSelectUser(true),
                    size: 20,
                  }}
                />
              </>,
          )
        }
        <User
          {...{
            field: 'id',
            search,
          }}
        />
      </Row>
      <Cell
        {...{
          width: '200px',
        }}
      >
        <Created>
          Created
        </Created>
      </Cell>

      <Row
        {...{
          width: '200px',
        }}
      >
        {
          useState(
            false,
            (
              select,
              setSelect,
            ) =>
              <>
                <SelectType
                  {...{
                    setSelect,
                    select,
                    search,
                  }}
                />
                <UserIcon
                  {...{
                    onClick: () => setSelect(true),
                    size: 20,
                  }}
                />
              </>,
          )
        }
        {
          get(
            queryString
              .parse(
                decodeURIComponent(
                  search,
                )
              ),
              'where',
              'type',
          ).split('..')[2] ||
          <Em>all types</Em>
        }
      </Row>
      <Cell
        {...{
          width: '300px',
        }}
      >
        Description
      </Cell>
      <Cell
        {...{
          proportion: 1,
        }}
      >
        Changed tables
      </Cell>
    </Header>
  </>
