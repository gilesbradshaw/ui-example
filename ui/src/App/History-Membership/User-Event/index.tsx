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
  HistoryMembershipUserEvent as Item,
  HistoryMembershipUserEventVariables as Variables,
} from '../../../generated/HistoryMembershipUserEvent'
import query from './query'
import back from '../../util/back'
import List from '../../util/styled/List'
import H1 from '../../util/styled/H1'
import H2 from '../../util/styled/H2'
import H3 from '../../util/styled/H3'
import Moment from '../../util/styled/Moment'
import Row from '../../util/styled/Row'
import Em from '../../util/styled/Em'
import Header from '../../util/styled/Header'

import Cell from '../../util/styled/Cell'
import Spinner from '../../util/styled/Spinner'
import Breadcrumb from '../../Breadcrumb'

const UserEvent: FunctionComponent<
  RouteComponentProps<{
    id: string;
  }>
> = ({
  location: {
    search,
  },
  match: {
    url,
    params: {
      id
    }
  }
}) => {

    const {
      data,
      loading,
      error,
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
    const [
      goBack,
      setGoBack,
    ] = useState(
      false,
    )
    return (
      <Modal
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
        <List>
          <H1>
            User Event
          </H1>
          {
            loading
              ? <Spinner
                {...{
                  size: 20
                }}
              />
              : error
                ? <Cell>
                  {error?.message}
                </Cell>
                : data?.historyMembership_userEvent
                  ? (
                    <List>
                        <H2>
                          {
                            data
                            .historyMembership_userEvent
                            ?.user
                            ?.fullName
                          }
                        </H2>
                        <H3>
                          {
                            data
                            .historyMembership_userEvent
                            ?.type
                          }
                        </H3>
                        <Moment>
                          {
                            data
                            .historyMembership_userEvent
                            ?.createdOn
                          }
                        </Moment>
                        <List>
                          {
                            data
                            .historyMembership_userEvent
                            ?.fields
                            ?.edges
                            ?.filter(
                              n => n,
                            )
                            ?.map(
                              ({
                                // @ts-ignore
                                node,
                              }) => <List
                                {...{
                                  proportion: 1,
                                }
                              }>
                                <Header>
                                  {node.name}
                                </Header>
                                <Cell>
                                  {
                                    node.value ||
                                      <Em>[null]</Em>
                                  }
                                </Cell>
                              </List>
                            )
                          }
                        </List>
                    </List>
                  ) 
                : '??'
          }
        </List>
      </Modal>
    )

  }

export default UserEvent