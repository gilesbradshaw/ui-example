import React from 'react'
import Link from '../../../../../util/styled/Link'
import {
  Route,
  RouteComponentProps,
} from 'react-router-dom'

const Unknown = () => <div>????</div>

export default (
  {
    match: {
      path,
      params: {
        id
      },
    },
  }: RouteComponentProps<{ id: string; }>
) =>
  <>
    <Link
      to='.'
      >
        {id}
    </Link>
    <Route
      component={Unknown}
      path={`${path}/:any`}
      exact
    />
  </>