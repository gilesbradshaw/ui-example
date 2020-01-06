import React from 'react'
import { Link } from 'react-router-relative-link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import Changes from './Changes'

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
  </Switch>
  