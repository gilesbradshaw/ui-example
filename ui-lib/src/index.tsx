/**
 * @class ExampleComponent
 */

import React from 'react'

export type Props = { text: string };

const giles = <h1>GILESS!!!!!</h1>
export {
  giles
}
export default class ExampleComponent extends React.Component<Props> {
  render() {
    const { text } = this.props;

    return <div style={{ color: "red" }}>Hello {text}</div>;
  }
}