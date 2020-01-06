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
  ConfigurationAuditChange as Item,
  ConfigurationAuditChangeVariables as Variables,
} from '../../../../generated/ConfigurationAuditChange'
import Breadcrumb from '../../../Breadcrumb'
import Header from './Header'
import Changes from './Changes'

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
              <Header
                {...{
                  changes: data
                    ?.configurationAudit_change
                    ?.changes as any[] | undefined,
                  user: data
                    ?.configurationAudit_change
                    ?.user
                }}
              />
              <Changes
                {...{
                  changes: data
                    ?.configurationAudit_change
                    ?.changes as any[] | undefined
                }}
              />
            </div>


        }
      </div>
    </Modal>
  }
export default Change
