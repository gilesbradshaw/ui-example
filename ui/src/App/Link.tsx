import React from 'react'
import styled from 'styled-components'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import selected from './selected'
import { RouteComponentProps } from 'react-router'
import ClassName from './types/Class-Name'

const Summary: React.FC<{
  path: string
}
  & RouteComponentProps<any>
  & ClassName> = (
  {
    className,
    children,
    path,
    match,
  }
) =>
  <div
    className={className}
  >
    <Link
      to={(path || match.path).replace('//', '/')}
    >
      {children}
    </Link>
  </div>

export default
  withRouter(
    styled(Summary)`
      {
        background: ${
          selected(
            'yellow',
          )
        };
        font-weight: ${
          selected(
            false,
            'bold'
          )
        };
      }
    `
  )
