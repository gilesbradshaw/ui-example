
import React from 'react'

import Link from '../../util/styled/Link'
import Modal from 'react-modal'
import AutoSizer from 'react-virtualized-auto-sizer'

import Users from './Inner'
import Icon from '../../User/Icon'

import H1 from '../../util/styled/H1'
import Em from '../../util/styled/Em'
import queryString from 'query-string'
import set from '../../util/query-string/set'
import remove from '../../util/query-string/remove'

export default (
  {
    selectUser,
    setSelectUser,
    field,
    url,
    search,
  }:
    {
      selectUser: boolean;
      setSelectUser: (select: boolean) => any;
      field : string;
      url: string;
      search?: string;
    }
) =>
  <Modal
    {...{
      isOpen: selectUser,
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
        setSelectUser(
          false,
        ),
      // contentLabel: "Example Modal"
    }}
  >
    <AutoSizer>
      {
        ({
          height,
          width
        }) =>
          <div
            {...{
              style: {
                height: `${height}px`,
                width: `${width}px`,
                // backgroundColor: 'red',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }
            }}
          >
            <H1>
              <Icon
                {...{
                  size: '1em',
                }}
              />
              <div>
                Select a user
              </div>
            </H1>
            <Link
              {...{
                height: '30px',
                onClick: () =>
                  setSelectUser(
                    false,
                  ),
                to: `?${queryString
                    .stringify(
                      remove({
                        value: 'userId',
                        type: 'where',
                        query: queryString
                          .parse(
                            decodeURIComponent(search || ''),
                          ),
                      })
                    )
                  }`,
              }}
            >
              <Em>
                all users
                  </Em>
            </Link>
            <Link
              {...{
                height: '30px',
                onClick: () =>
                  setSelectUser(
                    false,
                  ),
                to: `?${queryString
                  .stringify(
                    set({
                      value: 'userId..e',
                      type: 'where',
                      query: queryString
                        .parse(
                          decodeURIComponent(search || ''),
                        ),
                    })
                  )
                }`,
              }}
            >
              <Em>
                no user
              </Em>
            </Link>

            <Users
              {...{
                itemHeight: 30,
                render: (
                  node,
                ) =>
                  <div
                    {...{
                      key: node.id,
                    }}
                  >
                    <Link
                      {...{
                        onClick: () =>
                          setSelectUser(
                            false,
                          ),
                        to: `?${queryString
                          .stringify(
                            set({
                              // @ts-ignore
                              value: `userId..e..${node[field]}`,
                              type: 'where',
                              query: queryString
                                .parse(
                                  decodeURIComponent(search || ''),
                                ),
                            })
                          )
                        }`
                      }}
                    >
                      {node.fullName}
                    </Link>
                  </div>
              }}
            />
          </div>
      }
    </AutoSizer>
  </Modal>
