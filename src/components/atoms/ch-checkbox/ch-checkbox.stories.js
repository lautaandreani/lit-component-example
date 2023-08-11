import { ChCheckbox } from './ch-checkbox'
import { html } from 'lit';

export default {
  component: 'ch-checkbox',
};

export const Primary = {
  args: {
    toggle: true
  },
  render: (args) => html`<ch-checkbox toggle=${args.toggle}>HELLO</ch-checkbox>`,
};