import { Story, Meta } from '@storybook/react/types-6-0'

import DashItemsListAuth from '.'

import { ItemsDashHeader } from '../../../../interfaces'

export default {
  title: 'Components/DashItemsRh',
  component: DashItemsListAuth,
  argTypes: {
    name: {
      description: 'Forneça o nome do usuário logado.',
      table: {
        type: {
          summary: 'não obrigatório'
        },
        defaultValue: {
          summary: 'Roger'
        }
      },
    }
  }
} as Meta

const Template: Story<ItemsDashHeader<string>> = args => <DashItemsListAuth {...args} />


export const clone = Template.bind({})
clone.storyName = 'RH Header'

clone.args = {
  name: 'Mariana'
}
