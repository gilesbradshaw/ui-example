
import React from 'react'

import Link from '../../util/styled/Link'
import Modal from 'react-modal'
import AutoSizer from 'react-virtualized-auto-sizer'
import queryString from 'query-string'

import Calendar from 'react-calendar'

import CalendarIcon from './Icon'

import H1 from '../../util/styled/H1'
import Em from '../../util/styled/Em'

import removeWhere from '../../util/query-string/remove'

export default (
  {
    select,
    setSelect,
    search,
    onChange,
  }:
    {
      select: boolean;
      setSelect: (select: boolean) => any;
      search?: string;
      onChange: (d: Date | Date[] | null) => void,
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
              <CalendarIcon
                {...{
                  size: '1em',
                }}
              />
              <div>
                Select date
              </div>
            </H1>
            <Link
              {...{
                height: '30px',
                onClick: () =>
                  setSelect(
                    false,
                  ),
                to: `?${
                  removeWhere({
                    query: queryString
                      .parse(
                        decodeURIComponent(search || ''),
                      ),
                    type: 'where',
                    value: 'createdOn',
                  })
                  }`,
              }}
            >
              <Em>
                all time
                  </Em>
            </Link>
            <Calendar
              {...{
                onChange,
              }}
            />
          </div>
      }
    </AutoSizer>
  </Modal>
