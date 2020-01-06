import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
// import App from './App'
import {
  Up,
 } from 'ui-icons'


ReactDOM.render(
  <div
      style={{
        height: '100%',
      }}
    >
      <Up />
    </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
