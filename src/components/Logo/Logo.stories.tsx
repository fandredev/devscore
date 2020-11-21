import { Story, Meta } from '@storybook/react/types-6-0'
import Logo from '.'

export default {
  title: 'Components/Logo',
  component: Logo
} as Meta


const Template: Story<any> = args => <Logo {...args} />

const Clone = Template.bind({})
Clone.storyName = 'Logotipo DevScore'
Clone.args = {}
