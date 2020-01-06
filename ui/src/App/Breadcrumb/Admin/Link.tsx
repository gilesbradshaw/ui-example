import React from 'react'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'
import ConfigurationTitle from './Configuration/Title'
import ConfigurationLink from './Configuration/Link'
import MembershipTitle from './Membership/Title'
import MembershipLink from './Membership/Link'


import Link from '../../util/styled/Link'

export default (
  {
    match: {
      path,
    }
  }: RouteComponentProps
) => <>
  <Link
    to='.'
    >
      admin
  </Link>
  <Switch>
    <Route
      component={ConfigurationTitle}
      path={`${path}/configuration`}
      exact
    />
    <Route
      component={ConfigurationLink}
      path={`${path}/configuration`}
    />
    <Route
      component={MembershipTitle}
      path={`${path}/membership`}
      exact
    />
    <Route
      component={MembershipLink}
      path={`${path}/membership`}
    />
  </Switch>
</>