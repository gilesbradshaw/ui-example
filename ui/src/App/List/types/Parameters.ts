import {
  FunctionComponent,
} from 'react'
import {
  RouteComponentProps,
} from 'react-router-dom'

import { Row } from './Row'
import { Header } from './Header'
import { Strings } from './Strings'

export interface Parameters<
  Node extends {
    id: number;
  },
> {
  Row: Row<Node>,
  Header: Header,
  Item: FunctionComponent<
    RouteComponentProps<
      { id: string }
    >
  >,
  strings: Strings,
  query: any,
  itemHeight: number,
}
