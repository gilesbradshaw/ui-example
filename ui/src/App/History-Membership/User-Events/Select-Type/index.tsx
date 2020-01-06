
import React from 'react'

import Modal from 'react-modal'
import AutoSizer from 'react-virtualized-auto-sizer'
import Link from '../../../util/styled/Link'
import Icon from '../../../User/Icon'

import List from '../../../util/styled/List'
import H1 from '../../../util/styled/H1'
import Em from '../../../util/styled/Em'
import queryString from 'query-string'
import set from '../../../util/query-string/set'
import remove from '../../../util/query-string/remove'
import LinkType from './Link-Type'

export default (
  {
    select,
    setSelect,
    search,
  }:
    {
      select: boolean;
      setSelect: (select: boolean) => any;
      search?: string;
    }
) =>
  <Modal
  {...{
    isOpen: select,
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
      setSelect(
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
          <List
            {...{
              style: {
                height: `${height}px`,
                width: `${width}px`,
                // backgroundColor: 'red',
                overflow: 'hidden',
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
                Select a type
              </div>
            </H1>
            <Link
              {...{
                height: '30px',
                onClick: () =>
                  setSelect(
                    false,
                  ),
                to: `?${queryString
                    .stringify(
                      remove({
                        value: 'type',
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
                all types
                  </Em>
            </Link>
            <LinkType
              {...{
                setSelect,
                search,
                type: 'mail',
              }}
            />
            <LinkType
              {...{
                setSelect,
                search,
                type: 'userProfile',
              }}
            />
            <LinkType
              {...{
                setSelect,
                search,
                type: 'webpages_Membership',
              }}
            />
          </List>
      }
    </AutoSizer>
  </Modal>
