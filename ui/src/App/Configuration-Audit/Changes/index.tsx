import Row from './Row'
import Item from './Item'
import query from './query'
import {
  ConfigurationAuditChanges as Nodes,
  ConfigurationAuditChanges_configurationAudit_changes_edges_node as Node,
  ConfigurationAuditChanges_configurationAudit_changes_edges as Edges,
} from '../../../generated/ConfigurationAuditChanges'
import {
  EnumType_configurationAudit_change_Indexes as EnumIndexes,
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
