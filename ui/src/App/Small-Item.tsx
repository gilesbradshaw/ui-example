import React from 'react'
import styled from 'styled-components'
import ClassName from './types/Class-Name'

const SmallItem = (
  {
    className,
    children,
    width,
  }: {
    children: any;
    width?: string;
  }
  & ClassName,
) => <div
    className={className}
  >
    {children}
  </div>
export default styled(SmallItem)`{
  width: ${({ width }) => width};
}`