import React from 'react'
import { Link } from 'react-router-relative-link'
import {
  RouteComponentProps,
} from 'react-router-dom'

export default ({
  match: {
    url,
  }
}: RouteComponentProps) =>
  <>
    <Link
      {...{
        to: `${url}/changes?order=createdOn`,
      }}
    >
      changes
    </Link>
    <Link
      {...{
        to: `${url}/users`,
      }}
    >
      users
    </Link>
    <Link
      {...{
        to: `${url}/user-events`,
      }}
    >
      user events
    </Link>
  </>
