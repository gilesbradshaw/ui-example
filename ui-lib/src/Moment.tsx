import React, {
  FunctionComponent
} from 'react'
import Moment, {
  MomentProps
} from 'react-moment'

const M: FunctionComponent<MomentProps> = ({
  ...props
}) =>
  <Moment
    {...{
      format: 'DD MMM YY HH:mm:ss ZZ',
      ...props,
    }}
  />

export default M
