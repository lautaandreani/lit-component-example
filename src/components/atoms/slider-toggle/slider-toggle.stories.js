import { html } from 'lit';
import { SliderToggle } from './slider-toggle'; // Ajusta la ruta al archivo slider-toggle.ts

export default {
  title: 'SliderToggle',
  component: 'slider-toggle',
};

const Template = (args) =>
  html`<slider-toggle .active="${args.active}"></slider-toggle>`;

export const Default = Template.bind({});
Default.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};
