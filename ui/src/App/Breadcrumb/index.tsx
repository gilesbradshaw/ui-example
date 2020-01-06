import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Row from '../util/styled/Row'
import Null from '../util/Null'
import Link from './Link'
import AdminTitle from './Admin/Title'

export default ({
  path,
}: {
  path: string;
}) =>
  <Row>
    <Switch>
      <Route
        component={Null}
        path={`${path}`}
        exact
      />
      <Route
        component={Link}
        path={`${path}`}
      />
    </Switch>
  </Row>