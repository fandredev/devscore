import { Story, Meta } from '@storybook/react/types-6-0'
import TechnologiesVacancy from '.'

import TechonologiesVacancy from '.'
import { TechnologiesVacancyProps } from '../../interfaces'

export default {
  title: 'Components/Technologies',
  component: TechnologiesVacancy,
  argTypes: {
    image:{
      description: 'Passe o ícone/imagem da tecnologia nessa props',
      table:{
        type: {
          summary: 'obrigatório'
        }
      }
    },
    tech: {
      description: 'Passe o nome da tecnológia nessa props.',
      table: {
        type: {
          summary: 'nao obrigatório'
        },
        defaultValue: {
          summary: 'HTML5'
        }
      }
    }
  }
} as Meta

const Template: Story<TechnologiesVacancyProps> = args => <TechonologiesVacancy {...args} />

export const clone = Template.bind({})
clone.storyName = 'Template de tecnologia HTML5'

clone.args = {
  image: '',
  tech: 'HTML5'
}
