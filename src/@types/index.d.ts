
declare module "*.svg"
declare module "*.png"
declare module "*.jpg"

import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue_hard: string
    }
  }
}
