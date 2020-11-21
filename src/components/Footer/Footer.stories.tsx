import { Story, Meta } from '@storybook/react/types-6-0'
import { PropsFooter } from '../../interfaces'

import Footer from '.'

export default {
  title: 'Components/Footer',
  component: Footer,

  argTypes: {
    id: {
      defaultValue: 'Hello',
      description: 'Forneça um id para aplicação de estilos CSS.',
      table: {
        type: {
          summary: 'não obrigatório'
        }
      },
    }
  }
} as Meta


const Template: Story<PropsFooter> = args => <Footer {...args} />

export const FooterNoAuth = Template.bind({})
FooterNoAuth.storyName = 'Footer'

FooterNoAuth.args = {
  id: 'forgot_password'
}
