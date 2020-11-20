import { Meta, Story } from '@storybook/react/types-6-0'

import Card from '.'

import { CardProps } from '../../../interfaces'

export default {
  title: 'Components/CardLanding',
  component: Card,
  argTypes: {
    url: {
      description: 'O caminho da imagem/ícone para o card',
      table: {
        type: {
          summary: 'obrigatório'
        }
      }
    },
    alt: {
      description: 'O texto alternativo para sua imagem/ícone.',
      table: {
        type: {
          summary: 'obrigatório'
        }
      }
    },
    text: {
      description: 'O texto da linguagem.',
      table: {
        type: {
          summary: 'obrigatório'
        }
      }
    }
  }
} as Meta

const Template: Story<CardProps<string>> = args => <Card {...args} />

export const CardLanding = Template.bind({})
CardLanding.storyName = 'HTML5'

CardLanding.args = {
  url:  '../../../../public/images/icons/html.svg',
  alt: 'Hyper Text Markup Language',
  text: 'HTML5'
}
