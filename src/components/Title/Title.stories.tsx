import { Story, Meta } from '@storybook/react'
import Title from './'

import { TitleProps } from '../../interfaces'


export default {
  title: 'Components/Title',
  component: Title,
  argTypes: {
    children: {
      description: 'Forneça um texto para o título.',
       table: {
        type: {
            summary: 'obrigatório',
        },
      }
    },
    id: {
      description: 'Forneça um id para aplicar estilos CSS.',
      table: {
        type: {
            summary: 'nao obrigatório',
        },
      }
    }
  }
} as Meta


const Template: Story<TitleProps> = args => <Title {...args} />


export const TestingTitle = Template.bind({})


TestingTitle.args = {
  children: 'Editar Perfil',
  id: 'edit-profile-title'
}
