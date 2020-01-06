import React from 'react'
import Link from '../../../util/styled/Link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import ChangesTitle from './Changes/Title'
import ChangesLink from './Changes/Link'


export default (
  {
    match: {
      path,
    },
  }: RouteComponentProps
) =>
  <>
    <Link
      to='.'
      >
        configuration
    </Link>
    <Switch>
      <Route
        component={ChangesTitle}
        path={`${path}/changes`}
        exact
      />
      <Route
        component={ChangesLink}
        path={`${path}/changes`}
      />
    </Switch>
  </>