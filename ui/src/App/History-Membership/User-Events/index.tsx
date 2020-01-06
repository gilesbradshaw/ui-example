import Item from '../User-Event'

import Row from './Row'
import Header from './Header'
import query from './query'
import {
  HistoryMembershipUserEvents as Nodes,
  HistoryMembershipUserEvents_historyMembership_userEvents_edges_node as Node,
  HistoryMembershipUserEvents_historyMembership_userEvents_edges as Edges,
} from '../../../generated/HistoryMembershipUserEvents'
import {
  EnumType_historyMembership_userEvent_Indexes as EnumIndexes,
} from '../../../generated/globalTypes'
import strings from './strings'

import List from '../../List'

export default List<
  Node,
  Nodes,
  Edges,
  EnumIndexes
  >({
    Row,
    Header,
    Item,
    query,
    strings,
    itemHeight: 70,
  })
