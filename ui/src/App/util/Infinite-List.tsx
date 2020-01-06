import React, { useState } from 'react'
import { Link } from 'react-router-relative-link'
import InfiniteLoadingList from './Infinite-Loading-List'

import uses from './uses'
import Spinner from './styled/Spinner'
import './Infinite-List.css'

type SearchParams = {
  search?: string;
}

export default <
  Node extends {
    id: number;
  },
  Nodes,
  Edges,
  EnumIndexes extends string,
  >(
    {
      search = '',
      query,
      nodesName,
      pageType,
      render,
      itemHeight,

    }: SearchParams & {
      query: any;
      nodesName: string;
      pageType: string;
      render?: (node: Node, index: number) => any;
      itemHeight: number;
    }
  ) => {
  const {
    nodes,
    loading,
    loadMore,
    hasNextPage,
    totalCount,
  } = uses<
    Node,
    Nodes,
    Edges,
    EnumIndexes
  >({
    nodesName,
    pageType,
    query,
  })(
    decodeURIComponent(
      search,
    ),
  )
  if (loading && !nodes?.length) {
    return <Spinner
      {...{
        size: 20,
      }}
    />
  }
  
  const loadMoreItems = (
    startIndex: number,
    stopIndex: number,
  ) => {
    if (loading) {
      return null
    } else {
      if (loadMore) {
        return loadMore()
      }
    }
    return null
  }
  if (!nodes?.length) {
    return <div>
      nothing to see
    </div>
  }
  // @ts-ignore
  const isChangeLoaded = (index: number): boolean =>
    !hasNextPage ||
    index < (nodes || []).length
  return (
    <div className="InfiniteList-list">
      <InfiniteLoadingList
        itemHeight={
          (index) =>
            itemHeight
        }
        itemCount={totalCount}
        hasMoreItems={hasNextPage}
        loadMoreItems={loadMoreItems}
        placeholder={<div>..</div>}
      >
        {(nodes || []).map((node, i) => (
          render
            ? render(node, i)
            : <div
              className="InfiniteList-item"
              key={i}
            >
              <Link
                to={`./${node.id}${search}`}
              >
                {
                  JSON
                    .stringify(
                      node,
                      null,
                      2,
                    )
                }
              </Link>
            </div>
        ))}
      </InfiniteLoadingList>
    </div>
  )
}
