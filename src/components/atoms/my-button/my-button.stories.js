import { ChLitMyButton } from './my-button'
import { html } from 'lit';

export default {
  component: 'ch-lit-my-button',
};

export const Primary = {
  args: {
    social: 'Storybook'
  },
  render: (args) => html`<ch-lit-my-button social=${args.social}>HELLO</ch-lit-my-button>`,
};