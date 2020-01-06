import React from 'react'
import {
  Switch,
  Route,
  RouteComponentProps
} from 'react-router-dom'
import Link from '../util/styled/Link'

import Row from '../util/styled/Row'
import AdminLink from './Admin/Link'
import AdminTitle from './Admin/Title'

export default (
  {
    match: {
      path,
    }
  }: RouteComponentProps
) =>
  <Row>
    <Link
      {...{
        to: path,
      }}
      >
        🏠
    </Link>
    <Switch>
      <Route
        component={AdminTitle}
        path={`${path}admin`}
        exact
      />
      <Route
        component={AdminLink}
        path={`${path}admin`}
      />
    </Switch>
  </Row>