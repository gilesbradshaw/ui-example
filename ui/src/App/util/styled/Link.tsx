import styled from 'styled-components'

import {
  Link,
} from 'react-router-relative-link'

export default styled(
  Link,
)<{
  height?: string;
}>`
  display: block;
  height: ${({ height = 'none' }): string => height};
`
