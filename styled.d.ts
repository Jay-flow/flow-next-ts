import "styled-components"
import { TypeOfTheme } from "./styles/theme"

declare module "styled-components" {
  export interface DefaultTheme extends TypeOfTheme {}
}
