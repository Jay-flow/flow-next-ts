import { css } from "styled-components"

/* Import media functions to make media queries easier to use.

const Container = styled.div`
  width: 30px;
  height: 30px;
  ${
    media.mobile`
      width: 10px;
      height: 10px
    `
  }
`
*/

const sizes = {
  mobile: "576px",
  tablet: "768px",
  desktop: "1200px"
}

type cssParams = Parameters<typeof css>
const keys = Object.keys(sizes) as Array<keyof typeof sizes>

const media = keys.reduce((accumulator, label) => {
  accumulator[label] = (...args: cssParams) => {
    return css`
      @media (max-width: ${sizes[label]}) {
        ${css(...args)}
      }
    `
  }
  return accumulator
}, {} as Record<keyof typeof sizes, Function>)

export default media
