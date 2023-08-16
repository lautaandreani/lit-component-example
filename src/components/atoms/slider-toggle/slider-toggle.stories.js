import { html } from 'lit';
import { ChLitSliderToggle } from './slider-toggle'; // Ajusta la ruta al archivo slider-toggle.ts

export default {
  component: 'ch-lit-slider-toggle',
};

const Template = (args) =>
  html`<ch-lit-slider-toggle .active="${args.active}"></slider-toggle>`;

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
