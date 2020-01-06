import React from 'react'
import { RouteComponentProps } from 'react-router'
import { Link } from 'react-router-dom'
import { lifecycle } from 'recompose'
import request from 'request'

const Callback = (props: RouteComponentProps) => <div>
  <h1>Callback</h1>
  <Link to = '/'>home</Link>
  <div>
    <div>code</div>
  </div>
</div>

export default lifecycle<RouteComponentProps, {}>(
  {
    componentDidMount() {
      request.post(
        `http://${window.location.host}/callback`,
        {
          json: {
            code: new URLSearchParams(
              this.props.location.search
            ).get('code')
          },
        },
        (err, httpResult, result) => {
          if (result) {
            sessionStorage.setItem(
              'login',
              JSON.stringify(result),
            )
            } else {
              sessionStorage.removeItem(
                'login',
              ) 
            }
          const back = new URLSearchParams(
            this.props.location.search
          ).get('back')
          if (back) {
            this.props.history.replace(
              back, 
            )
          }
        }
      )
    },
  },
)(Callback)
