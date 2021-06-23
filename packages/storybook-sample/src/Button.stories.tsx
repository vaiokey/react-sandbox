import { Meta, Story } from '@storybook/react/types-6-0'
import { ComponentProps } from 'react'

import { Button } from './Button'

export default {
  title: 'button',
  component: Button,
} as Meta

export const Primary: Story<ComponentProps<typeof Button>> = (props) => {
  return <Button {...props}>{props.children}</Button>
}

Primary.args = {
  children: 'Hello, Storybook!',
}
