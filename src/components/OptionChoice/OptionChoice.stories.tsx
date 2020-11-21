import { Story, Meta } from '@storybook/react/types-6-0'

import OptionChoice from '.'

import { PropsChildren } from '../../interfaces'

export default {
  title: 'Components/OptionChoice',
  component: OptionChoice,
  argTypes: {
    children: {
      description: 'O texto que apareça nas perguntas'
    }
  }
} as Meta

const Template: Story<PropsChildren> = args => <OptionChoice {...args} />

export const Clone = Template.bind({})
Clone.storyName = 'Opção selecionada'

Clone.args = {
  children: 'Verdadeira'
}
