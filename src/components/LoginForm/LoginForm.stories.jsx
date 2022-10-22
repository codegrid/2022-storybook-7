import React from 'react'
import { LoginForm } from './LoginForm'
// 👇テスト用のライブラリからimport
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

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

  // .storybook/preview.jsに、actions: { argTypesRegex: '^on[A-Z].*' },の指定があるので不要
  // argTypes: {
  //   onSubmit: { action: true },
  // },
}

const Template = (args) => <LoginForm {...args} />

export const Default = Template.bind({})
Default.args = { ...Default.args }

Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  console.log(canvas)
  await userEvent.type(canvas.getByLabelText('メールアドレス'), 'tomof@example.com')
  await userEvent.type(canvas.getByLabelText('パスワード'), 'supersecret')
  await userEvent.click(canvas.getByRole('button'))

  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled())
}
