import {
  FunctionComponent,
} from 'react'

export interface Header extends FunctionComponent<{
  search: string;
  url: string;
}> {

}
