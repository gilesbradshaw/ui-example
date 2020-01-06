import React from 'react'
import UserIcon from '../User/Icon'
import Row from '../util/styled/Row'
import Header from '../util/styled/Header'
import Cell from '../util/styled/Cell'
import User from '../User'
import Created from '../Created'
import SelectUser from '../History-Membership/Users/Select-User'
import useState from '../util/use-state'

export default (
  {
    search,
    url,
  }: {
    search: string;
    url: string;
  }) =>
  <>
    <Header>
      <Cell
        {...{
          width: '50px',
        }}
      >
        Id
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
              selectUser,
              setSelectUser,
            ) =>
              <>
                <SelectUser
                  {...{
                    url,
                    field: 'userId',
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
            search,
            field: 'userId',
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