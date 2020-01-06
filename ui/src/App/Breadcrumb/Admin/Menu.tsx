import React from 'react'
import { Link } from 'react-router-relative-link'
import {
  RouteComponentProps,
} from 'react-router-dom'

import Indent from '../../util/styled/Indent'
import List from '../../util/styled/List'
import ConfigurationMenu from './Configuration/Menu'
import MembershipMenu from './Membership/Menu'

export default (
  {
    match: {
      path,
      url,
      ...match
    },
    ...rest
  }: RouteComponentProps
) =>
  <>

    <Link
      to='./configuration'
    >
      configuration
    </Link>
    <Indent
      {...{
        by: '30px',
      }}
    >
      <List>
        <ConfigurationMenu
          {...{
            match: {
              path: `${path}/configuration`,
              url: `${url}/configuration`,
              ...match,
            },
            ...rest
          }}
        />
      </List>
    </Indent>
    <Link
      to='./membership'
    >
      membership
    </Link>
    <Indent
      {...{
        by: '30px',
      }}
    >
      <List>
        <MembershipMenu
          {...{
            match: {
              path: `${path}/membership`,
              url: `${url}/membership`,
              ...match,
            },
            ...rest
          }}
        />
      </List>
    </Indent>
  </>
