import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { TWStyles } from '@/tw.js'
import { cn, createReactComponent } from "@/src/lib/utils.js";

@customElement('ch-lit-slider-toggle')
export class ChLitSliderToggle extends LitElement {
  @property({ type: Boolean }) active = false;

  static styles = [css`
    .slider-circle {
      width: 20px;
      height: 20px;
      background-color: #11151A;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: left 0.3s;
    }
  `, TWStyles];

  private toggleActive() {
    this.active = !this.active;
  }

  render() {
    return html`
      <div class="${cn('inline-block w-[50px] h-[30px] bg-[#D1E500] cursor-pointer relative transition-[background-color] duration-[0.3s] rounded-[15px]', '', {'active': this.active})}" @click="${this.toggleActive}">
        <div class="slider-circle shadow-lg" style="left: ${this.active ? 'calc(100% - 15px)' : '15px'};"></div>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "ch-lit-slider-toggle": ChLitSliderToggle;
  }
}

export const SliderToggleReact = createReactComponent({
  tagName: 'ch-lit-slider-toggle',
  webComponent: ChLitSliderToggle,
  events: {
    onclick: 'clicked'
  }
})
