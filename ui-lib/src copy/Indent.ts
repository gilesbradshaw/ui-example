import styled from 'styled-components'
import Div from './Div'

export default styled(Div)
  <{
    by?: string;
  }>`
    margin-left: ${({ by = '10px' }) => by};
  `