import React from 'react'
import Link from '../../../util/styled/Link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import ChangesTitle from './Changes/Title'
import ChangesLink from './Changes/Link'
import UsersTitle from './Users/Title'
import UsersLink from './Users/Link'
import UserEventsTitle from './User-Events/Title'
import UserEventsLink from './User-Events/Link'


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
        membership
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
      <Route
        component={UsersTitle}
        path={`${path}/users`}
        exact
      />
      <Route
        component={UsersLink}
        path={`${path}/users`}
      />
      <Route
        component={UserEventsTitle}
        path={`${path}/user-events`}
        exact
      />
      <Route
        component={UserEventsLink}
        path={`${path}/user-events`}
      />
    </Switch>
  </>