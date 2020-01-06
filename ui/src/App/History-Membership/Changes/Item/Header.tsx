import React, {
  FunctionComponent,
} from 'react'
import {
  HistoryMembershipChange_historyMembership_change_user as User
} from '../../../../generated/HistoryMembershipChange'
import operation from './operation'

const Header: FunctionComponent<{
  changes: any[] | undefined;
  user?: User | null;
}> = ({
  changes,
  user,
}) => {
    const userRow = changes &&
      changes
        .find(
          ({
            __$operation,
            __$table,
          }) => (
            operation(
              __$operation,
            ) === 'inserted' ||
            operation(
              __$operation,
            ) === 'updated'
          ) &&
            __$table === 'user',
        )
    if (!user) {
      return (
        <div>
          <h1>
            No user
          </h1>
          <div>
            This suggests the changes were not made through the web application.
          </div>
        </div>
      )
    }
    return <div>
      <h1>
        User
      </h1>
      <div>
        <div>
          {user.name}
        </div>
        <div>
          {user.fullName}
        </div>
        <div>
          {user.email}
        </div>
        <div>
          {user.description}
        </div>
        <div>
          {userRow && userRow?.value?.date}
        </div>
      </div>
    </div>
  }

export default Header
