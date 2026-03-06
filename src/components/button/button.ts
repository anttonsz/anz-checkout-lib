import { LitElement, html } from 'lit'
import { property } from 'lit/decorators.js'
import styles from "./button.styles"


/**
 * Button component.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AnzButton extends LitElement {
  static override styles = styles
  
  @property()
  docsHint = 'base button'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} part="button">
            count is ${this.count}
          </button>
        </div>
        <p>${this.docsHint}</p>
      </div>
    `
  }

  private _onClick() {
    this.count++
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'anz-button': AnzButton
  }
}
