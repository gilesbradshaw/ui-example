import Modal from 'react-modal'
import styled from 'styled-components'

export default styled(Modal)`
  width: '70%',
  height: '70%',
  top: '50%',
  left: '50%',
  right: 'auto',
  bottom: 'auto',
  transform: 'translate(-50%, -50%)',
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`