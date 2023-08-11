import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"

import { TWStyles } from "@/tw"

@customElement('ch-checkbox')
export class ChCheckbox extends LitElement {
  @property({ type: Boolean }) checked = false
  @property({ type: String }) social = 'Github'

  static styles = [css``, TWStyles]

  _clicked() {
    this.checked = !this.checked
  }

  render() {
    return html`
    <input type="checkbox" class="accent-indigo-500" @click="${this._clicked}"/>
    <label class="text-white font-sans">${this.checked ? 'Checked !' : 'Not checked'}</label>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ch-checkbox': ChCheckbox
  }
}