import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

import { TWStyles } from '../../../../tw.js'
import { createComponent } from "@lit-labs/react";
import React from "react";

@customElement('slider-toggle')
export class SliderToggle extends LitElement {
  @property({ type: Boolean }) active = false;

  static styles = [css`
    :host {
      display: inline-block;
      width: 50px;
      height: 30px;
      background-color: #D1E500;
      border-radius: 15px;
      cursor: pointer;
      position: relative;
      transition: background-color 0.3s;
    }

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
      <div class="${this.active ? 'active' : ''}" @click="${this.toggleActive}">
        <div class="slider-circle shadow-lg" style="left: ${this.active ? 'calc(100% - 15px)' : '15px'};"></div>
      </div>
    `;
  }
}


declare global {
  interface HTMLElementTagNameMap {
    "slider-toggle": SliderToggle;
  }
}

export const MyButtonReact = createComponent({
  tagName: 'slider-toggle',
  elementClass: SliderToggle,
  react: React,
  events: {
    onclick: 'clicked'
  }
})
