import {
  FunctionComponent,
} from 'react'

export interface Row<Node> extends FunctionComponent<{
  search: string;
  node: Node;
}> {
  
}
