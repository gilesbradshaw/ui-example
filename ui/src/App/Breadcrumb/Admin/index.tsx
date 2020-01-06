import React from 'react'
import { Link } from 'react-router-relative-link'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

import Configuration from './Configuration'
import Membership from './Membership'

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
      component={Configuration}
      path={`${path}/configuration`}
    />
    <Route
      component={Membership}
      path={`${path}/membership`}
    />
  </Switch>
  