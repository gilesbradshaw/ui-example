import React from 'react'
import { Link } from 'react-router-relative-link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import Changes from './Changes'
import Users from './Users'
import UserEvents from './User-Events'

import Menu from './Menu'

export default (
  {
    match: {
      path,
    },
  }: RouteComponentProps
) =>
  <Switch>
    <Route
      {...{
        component: Menu,
        path,
        exact: true,
      }}
    />
    <Route
      component={Changes}
      path={`${path}/changes`}
    />
    <Route
      component={Users}
      path={`${path}/users`}
    />
    <Route
      component={UserEvents}
      path={`${path}/user-events`}
    />
  </Switch>
  