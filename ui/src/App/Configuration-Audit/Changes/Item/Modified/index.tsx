import React, {
  FunctionComponent,
} from 'react'
import Nbsp from 'react-nbsp'

import operation from '../operation'
import Header from './Header'
import Center from './Center'
import Column from './Column'

const Modified: FunctionComponent<{
  changes: any[];
  type: string;
  secondType?: string;
  title: string;
  link?: string;
}> = ({
  changes,
  type,
  secondType,
  title,
  link,
}) =>
  changes
    .find(
  ({
    __$operation,
  }) =>
    operation(
      __$operation,
    ) === type,
  )
    ? <div>
      <h2>{title}</h2>
      <div>
        {
          changes
            .filter(
              ({
                __$operation,
                __$table,
              }) =>
                operation(
                  __$operation,
                ) === type &&
                  __$table !== 'user'
            )
            .map(
              ({
                __$table,
                __$changed_columns=[],
                value: {
                  id,
                  ...value
                }
              }) => {
                const secondChange = secondType &&
                  changes
                    .find(
                      ({
                        __$operation,
                        __$table: table2,
                        value: {
                          id: id2,
                        }
                      }) =>
                        operation(
                          __$operation,
                        ) === secondType &&
                          table2 === __$table &&
                          id2 === id,
                    )
                return <div
                  {...{
                    key: `${__$table}:${id}`,
                  }}
                >
                  <h3>
                    {`${__$table}:${id}`}
                  </h3>
                  <div
                    {...{
                      style: {
                        display: 'flex',
                      }
                    }}
                  >
                    {
                      Object
                        .keys(
                          value,
                        )
                        .filter(
                          key =>
                            key !== 'timestamp',
                        )
                        .map(
                          key => ({
                            key,
                            changed: __$changed_columns &&
                            __$changed_columns
                              .includes(
                                key,
                              ),
                          })
                        )
                        .map(
                          ({
                            changed,
                            key,
                           }) =>
                            <Column
                              {...{
                                key,
                              }}
                            >
                              <Header
                                {...{
                                  changed,
                                }}
                              >
                                {key}
                              </Header>
                              <hr/>
                              {
                                secondChange &&
                                  <>
                                  <Center>
                                    {secondChange.value[key]}
                                  </Center>
                                  <Center>
                                    {
                                      changed 
                                      ? link
                                      : <Nbsp/>
                                    }
                                  </Center>
                                  
                                  </>
                              }
                              <Center>
                                {value[key]}
                              </Center>
                            </Column>
                        )
                    }
                  </div>
                </div>
              }
            )
        }
      </div>
    </div>
    : null

export default Modified
