import styled from 'styled-components'

export default styled
  .div<{
    changed: boolean;
  }>`
    padding-bottom: 3px;
    border-color: grey;
    border-bottom-style: solid;
    border-bottom-width: 3px;
    text-align: center;
    font-weight: ${
      ({
        changed,
      }) =>
        changed &&
          'bold'
    };
  `
