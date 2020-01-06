import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Login = (props: RouteComponentProps<{}>) =>
  <div>
    <a
      href={`/login?back=${props.location.pathname}`}
    >
      in
    </a>
    <a
      href={`/logout?back=${props.location.pathname}`}
    >
      out
    </a>

    <a
      href={`/logchange?back=${props.location.pathname}`}
    >
      log out and in
    </a>
    <a
      href={`/doc/`}
    >
      <FontAwesomeIcon
        icon={faBook}
      />
    </a>
  </div>

export default withRouter(Login)
