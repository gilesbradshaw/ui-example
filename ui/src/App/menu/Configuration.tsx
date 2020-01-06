import React from 'react'
import { Link } from 'react-router-relative-link'

export default () =>
  <>
    config!!!
    <Link
      to='/'
    >
      App
    </Link>
    
    <Link
      to='./changes?order=createdOn'
    >
      Changes
    </Link>
    <Link
      to='./membership-changes?order=createdOn'
    >
      Membership Changes
    </Link>
    <Link
      to='./users'
    >
      Users
    </Link>
    <Link
      to='./user-events'
    >
      User Events
    </Link>
  </>
