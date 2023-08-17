import { ChLitMyButton } from './my-button'
import { html } from 'lit';

export default {
  component: 'ch-lit-my-button',
};

export const Primary = {
  args: {
    isLoading: false,
    slotContent: 'Label'
  },
  render: (args) => html`<ch-lit-my-button .isLoading=${args.isLoading}>${args.slotContent}</ch-lit-my-button>`,
};