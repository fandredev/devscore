import { Story, Meta } from '@storybook/react/types-6-0'

import BurgerMenu from '.'

export default {
  title: 'Components/BurgerMenu',
  component: BurgerMenu,
} as Meta


const Template: Story<any> = args => <BurgerMenu {...args} />

export const MenuBurger = Template.bind({})

MenuBurger.args = {}
