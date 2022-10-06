import React from 'react'
import { LoginForm } from './LoginForm'

// コンポーネントの概要
export default {
  title: 'UI/LoginForm',
  component: LoginForm,
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
}

const Template = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = { ...Default.args }
