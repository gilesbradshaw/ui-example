import React, {
  FunctionComponent,
} from 'react'

import Modified from './Modified'

const Changes: FunctionComponent<{
  changes?: any[];
}> = ({
  changes,
}) => changes
? <>
  <div>
    <Modified
      {...{
        changes,
        type: 'inserted',
        title: 'inserted'
      }}
    />
    <Modified
      {...{
        changes,
        secondType: 'replaced',
        type: 'updated',
        link: '↓',
        title: 'updated',
      }}
    />
    <Modified
      {...{
        changes,
        type: 'deleted',
        title: 'deleted',
      }}
    />
  </div>
</>
: <></>

export default Changes
