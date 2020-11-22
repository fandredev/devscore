import { Story, Meta } from "@storybook/react/types-6-0"
import { ReactNode } from "react"

import OptionChoice from "."

export default {
  title: "Components/OptionChoice",
  component: OptionChoice,
  argTypes: {
    children: {
      description: "O texto que apareça nas perguntas",
    },
  },
} as Meta

const Template: Story<ReactNode> = args => <OptionChoice></OptionChoice>

export const Clone = Template.bind({})
Clone.storyName = "Opção selecionada"

Clone.args = {
  children: "Verdadeira",
}
