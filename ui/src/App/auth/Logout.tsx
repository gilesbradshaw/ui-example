import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { lifecycle } from 'recompose'

const Callback = (props: RouteComponentProps) => <div>
  <h1>logout</h1>
  <Link to = '/'>home</Link>
  <div>
    <div>code</div>
    <div>
      {
        new URLSearchParams(
          props.location.search
        ).get('code')
      }::
      {
        new URLSearchParams(
          props.location.search
        ).get('back')
      }
    </div>
  </div>
</div>

export default lifecycle<RouteComponentProps, {}>(
  {
    componentDidMount() {
      sessionStorage.removeItem(
        'login',
      )
      this.props.history.replace(
        new URLSearchParams(
          this.props.location.search
        ).get('back') || '/'
      )
    },
  },
)(Callback)
