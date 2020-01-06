import styled from 'styled-components'
import Div from './Div'

export default styled(Div)
  <{
    proportion?: number;
    width?: string;
    height?: string;
  }>`
    flex: ${({ proportion }) => proportion};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    overflow-y: auto;
    padding-left: 3px;
    #line-height: 0.9em;
  `
