import { Story, Meta } from '@storybook/react/types-6-0'
import { CheckboxProps } from '../../interfaces'

import Checkbox from '.'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      description: 'Utilizado para verificar se o checkbox está checado',
      table: {
        type: {
          summary: 'nao obrigatório'
        },
        defaultValue: {
          summary: false
        }
      }
    },
    number: {
      description: 'Utilizado para verificar a experiência do usuário',
      table: {
        type: {
          summary: 'nao obrigatório'
        },
        defaultValue: {
          summary: '0'
        }
      }
    }
  }
} as Meta

const Template: Story<CheckboxProps> = args => <Checkbox {...args} />

export const CheckedCloneDisabled = Template.bind({})

CheckedCloneDisabled.storyName = 'Disabled'
CheckedCloneDisabled.args = {
  checked: false,
  number: 1
}

export const CheckedCloneEnabled = Template.bind({})

CheckedCloneEnabled.storyName = 'Enabled'
CheckedCloneEnabled.args = {
  checked: true,
  number: 1
}
