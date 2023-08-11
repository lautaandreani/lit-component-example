import { MyButton } from './my-button'
import { html } from 'lit';

export default {
  component: 'my-button',
};

export const Primary = {
  args: {
    social: 'Storybook'
  },
  render: (args) => html`<my-button social=${args.social}>HELLO</my-button>`,
};