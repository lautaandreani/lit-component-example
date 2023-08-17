import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { TWStyles } from '@/tw.js'
import { cn } from '@/src/lib/utils'

import { createComponent } from '@lit-labs/react'
import React from 'react'

@customElement('ch-lit-my-button')
class ChLitMyButton extends LitElement {
  @property({ type: String }) isLoading: boolean = false

  static styles = [css``, TWStyles]

  private _clicked() {
    this.dispatchEvent(
      new CustomEvent('checked', {
        bubbles: true,
        detail: 'checked event data',
      })
    )
  }

  render() {
    return html`
      <button
        class="${cn(
          'px-10 bg-brand-lime min-w-[122px] font-sans h-14 flex items-center justify-center rounded-lg',
          '',
        )}"
        @click="${this._clicked}"
      >
        ${this.isLoading ? html`<p class="animate-spin">↻</p>` : html`<slot/>`}
      </button>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ch-lit-my-button': ChLitMyButton
  }
}

const MyButtonReact = createComponent({
  tagName: 'ch-lit-my-button',
  react: React,
  elementClass: ChLitMyButton,
  events: {
    onclick: 'clicked',
  },
})

export { ChLitMyButton, MyButtonReact }
