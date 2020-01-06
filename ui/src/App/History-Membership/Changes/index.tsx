import Row from './Row'
import Item from './Item'
import query from './query'
import {
  HistoryMembershipChanges as Nodes,
  HistoryMembershipChanges_historyMembership_changes_edges_node as Node,
  HistoryMembershipChanges_historyMembership_changes_edges as Edges,
} from '../../../generated/HistoryMembershipChanges'
import {
  EnumType_historyMembership_change_Indexes as EnumIndexes,
} from '../../../generated/globalTypes'
import strings from './strings'
import List from '../../List'
import Header from '../../List/Header'

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
    itemHeight: 30,
  })
