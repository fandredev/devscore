import { Story, Meta } from '@storybook/react/types-6-0'

import FormBox from '.'

export default {
  title: 'Components/FormBox',
  component: FormBox
} as Meta

const Template: Story<any> = args => <FormBox {...args} />


const clone = Template.bind({})
clone.storyName = 'FormBox lateral'
