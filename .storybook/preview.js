
import { configureActions } from '@storybook/addon-actions'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

configureActions({
  limit: 20
})
