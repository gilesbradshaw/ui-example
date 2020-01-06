import React, { forwardRef, FunctionComponent } from 'react'

import {
  VariableSizeList as List,
} from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import InfiniteLoader from 'react-window-infinite-loader'

type Props = {
  children: React.ReactNode[];
  hasMoreItems?: boolean;
  itemCount?: number;
  itemHeight: (index?: number) => number;
  loadMoreItems: (
    startIndex: number,
    stopIndex: number,
  ) =>
    Promise<
      unknown
    > | null;
  placeholder: React.ReactNode;
}
const I: FunctionComponent<Props> = (
  {
    children,
    hasMoreItems,
    itemCount,
    itemHeight,
    loadMoreItems,
    placeholder,
  },
  ref,
) => {
  const effectiveCount: number =
    (itemCount! === undefined)
      ? (itemCount || 0)
      : hasMoreItems
        ? children.length + 1
        : children.length

  const isItemLoaded = (
    index: number,
  ): boolean =>
    !hasMoreItems ||
    index < children.length

  return (
    <AutoSizer>
      {
        ({
          height,
          width,
        }) => (
            <InfiniteLoader
              isItemLoaded={isItemLoaded}
              itemCount={effectiveCount}
              loadMoreItems={loadMoreItems}
              ref={ref}
            >
              {
                ({
                  onItemsRendered,
                  ref,
                }) => (
                    <List
                      height={height}
                      itemCount={effectiveCount}
                      itemSize={itemHeight}
                      onItemsRendered={onItemsRendered}
                      ref={ref}
                      width={width}
                    >
                      {
                        ({
                          index,
                          style,
                        }) => (
                            <div
                              style={style}
                            >
                              {
                                children[index] != null
                                  ? children[index]
                                  : placeholder
                              }
                            </div>
                          )
                      }
                    </List>
                  )
              }
            </InfiniteLoader>
          )
      }
    </AutoSizer>
  )
}

const InfiniteLoading = forwardRef(
  I,
)

InfiniteLoading.defaultProps = {
  hasMoreItems: false,
  loadMoreItems: () =>
    null,
}

export default InfiniteLoading
