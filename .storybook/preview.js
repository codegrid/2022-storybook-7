export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true,
  },
  // // ša11yć¢ććŖć³ć®čØ­å®
  // a11y: {
  //   config: {
  //     rules: [
  //       // šč²ć®ć³ć³ćć©ć¹ćęÆć®ę¤ę»ćē”å¹å
  //       {
  //         id: 'color-contrast',
  //         enabled: false
  //       },
  //     ],
  //   },
  // },
}
