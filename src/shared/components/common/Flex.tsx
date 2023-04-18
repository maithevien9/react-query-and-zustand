import styled from '@emotion/styled'
import type * as CSS from 'csstype'
import { isNumber } from 'lodash-es'

interface Props {
  direction?: CSS.Property.FlexDirection
  justify?: CSS.Property.JustifyContent
  align?: CSS.Property.AlignItems
  bg?: string
  circle?: boolean
  width?: number | string
  height?: number | string
  overFlowY?: CSS.Property.OverflowY
  overFlowX?: CSS.Property.OverflowX
  txtAlign?: CSS.Property.TextAlign
  allowClick?: boolean
}

const Flex = styled.div(
  ({ direction, justify, align, bg, width, height, circle, overFlowY, overFlowX, txtAlign, allowClick }: Props) => {
    const formatWidth = isNumber(width) ? `${width}px` : width
    const formatHeight = isNumber(height) ? `${height}px` : height
    return `
      display: flex;
      flex-direction: ${direction};
      justify-content: ${justify};
      align-items: ${align};
      background-color: ${bg};
      width: ${formatWidth};
      height: ${formatHeight};
      border-radius: ${circle ? 50 : 0}%;
      overflow-y: ${overFlowY};
      overflow-x: ${overFlowX};
      text-align: ${txtAlign};
      ${allowClick && 'cursor: pointer;'} 
  `
  }
)

Flex.defaultProps = {
  align: 'flex-start',
  circle: false,
  direction: 'row',
  height: 'auto',
  justify: 'flex-start',
  overFlowX: 'visible',
  overFlowY: 'visible',
  width: 'auto'
}

export default Flex
