import styled from 'styled-components'
import Div from './Div'

export default styled(Div)
  <{ width?: string; }>`
    display: flex;
    flex-direction: row;
    width: ${({ width }) => width};
  `
