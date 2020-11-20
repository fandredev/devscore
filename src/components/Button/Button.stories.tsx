import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';
import { ButtonProps } from '../../interfaces'
import colors from '../../constants/colors';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    bg: {
      control: 'color',
      description: 'Escolha a cor de fundo do seu botão.',
      table: {
        type: {
            summary: 'obrigatório',
        },
      },
    },
    type: {
      description: 'Escolha o tipo de submissão do seu botão.',
      table: {
        type: {
            summary: 'não obrigatório',
        },
        defaultValue: { summary: 'button' }
      },
    },
    children: {
      description: 'Forneça um texto para o seu botão.',
      table: {
        type: {
          summary: 'obrigatório'
        }
      }
    },
    disabled: {
      description: 'Forneça se o seu botão deve estar habilitado ou desabilitado.',
      table: {
        type: {
          summary: 'nao obrigatório'
        },
        defaultValue: { summary: false }
      }
    },
    id: {
      description: 'Forneça um id para diferenciamento de estilos CSS.',
      table: {
        type: {
          summary: 'nao obrigatório'
        },
        defaultValue: { summary: '' }
      }
    }
  },
} as Meta;

const Template: Story<ButtonProps> = args => <Button {...args} />;

export const BlueButton = Template.bind({});
BlueButton.storyName = 'Blue Button'

BlueButton.args = {
  bg: colors.blue_hard,
  children: 'Avaliar Candidatos',
};

export const GreenButton = Template.bind({});
GreenButton.storyName = 'Green Button'

GreenButton.args = {
  bg: colors.green,
  children: 'Cadastrar',
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  bg: colors.green,
  children: 'Cadastrar',
  disabled: true
};
