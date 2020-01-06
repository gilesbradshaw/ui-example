import React from 'react'
import Link from '../../../../util/styled/Link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import IdTitle from './Id/Title'
import IdLink from './Id/Link'


export default (
  {
    match: {
      path,
    },
    location: {
      search,
    }
  }: RouteComponentProps
) =>
  <>
    <Link
      {...{
        to: `${search}`
      }}
    >
        changes
    </Link>
    <Switch>
      <Route
        component={IdTitle}
        path={`${path}/:id`}
        exact
      />
      <Route
        component={IdLink}
        path={`${path}/:id`}
      />
    </Switch>
  </>