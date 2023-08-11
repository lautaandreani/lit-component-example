import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import { TWStyles } from '../../tw.js'
import React from 'react'

@customElement('my-button')
export class MyButton extends LitElement {
  @property({ type: Boolean }) checked = false
  @property({ type: String }) name = 'Lautaro'

  static styles = [css``, TWStyles]

  _clicked() {
    this.checked = !this.checked
    console.log('checked value is', this.checked)
  }

  render() {
    return html`
      <button
        type="button"
        class="text-white font-sans bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        @click="${this._clicked}"
      >
        Hi ! ${this.name}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-button': MyButton
  }
}

export const MyButtonReact = createComponent({
  tagName: 'my-button',
  elementClass: MyButton,
  react: React,
  events: {
    onclick: '_clicked',
  },
})
