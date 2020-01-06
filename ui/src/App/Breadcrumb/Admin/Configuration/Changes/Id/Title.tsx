import React from 'react'
import {
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom'

export default (
  {
    match: {
      params: {
        id,
      },
    },
  }: RouteComponentProps<{ id: string; }>
) =>
  <div>
    {id}
  </div>
