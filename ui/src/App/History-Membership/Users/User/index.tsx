import React,
{
  FunctionComponent,
  useState,
} from 'react'
import {
  Redirect,
  RouteComponentProps,
} from 'react-router-dom'
import Modal from 'react-modal'
import {
  useQuery,
} from '@apollo/react-hooks'
import {
  HistoryMembershipUser as Item,
  HistoryMembershipUserVariables as Variables,
} from '../../../../generated/HistoryMembershipUser'
import Breadcrumb from '../../../Breadcrumb'

import Link from '../../../util/styled/Link'

// import Header from './Header'
// import Changes from './Changes'

import query from './query'
import back from '../../../util/back'


const Change: FunctionComponent<
  RouteComponentProps<{
    id: string;
  }>
> =
  ({
    match: {
      params: {
        id,
      },
      url,
    },
    location: {
      search,
    }
  }) => {
    const [
      goBack,
      setGoBack
    ] = useState(
      false,
    )

    const {
      data,
      loading,
      fetchMore,
    } = useQuery<
      Item,
      Variables
    >(
      query,
      {
        notifyOnNetworkStatusChange: true,
        variables: {
          id: parseInt(
            id,
            10,
          ),
        },
      },
    )

    return <Modal
      {...{
        isOpen: true,
        style: {
          content: {
            top: '50%',
            left: '50%',
            height: '60%',
            width: '60%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        },
        onRequestClose: () =>
          setGoBack(
            true,
          ),
        // contentLabel: "Example Modal"
      }}
    >
      {
        goBack &&
        <Redirect
          to={`${back(url)}${search}`}
        />
      }
      <Breadcrumb
        {...{
          path: '/',
        }}
      />
      <div
        {...{
          style: {
            whiteSpace: 'pre',
            // overflowY: 'scroll',
          }
        }}
      >
        {
          loading
            ? '...loading'
            :
            <div>
              here tis
              <Link
                {...{
                  to: `../../user-events/?where=userId..e..${data?.historyMembership_user?.id}`,
                }}
              >
                events
              </Link>
              <Link
                {...{
                  to: `../../../configuration/changes/?where=userId..e..${data?.historyMembership_user?.userId}`,
                }}
              >
                configuration changes
              </Link>
              <Link
                {...{
                  to: `../../changes/?where=userId..e..${data?.historyMembership_user?.userId}`,
                }}
              >
                membership changes
              </Link>
            </div>


        }
        {JSON.stringify(data, null, 2)}
      </div>
    </Modal>
  }
export default Change
