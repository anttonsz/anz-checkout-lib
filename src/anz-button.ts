import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

/**
 * Custom element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('anz-button')
export class MyElement extends LitElement {
  @property()
  docsHint = 'base button'

  @property({ type: Number })
  count = 0

  render() {
    return html`
      <div></div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p>${this.docsHint}</p>
    `
  }

  private _onClick() {
    this.count++
  }

  static styles = css`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }
    .card {
      border: 1px solid #D1D1D1;
      border-radius: 8px;
      padding: 2em;
    }

    ::slotted(h1) {
      font-size: 2.5em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      color: #8F8F8F;
      border: 1px solid #D1D1D1;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #FFECDA;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto #D1D1D1;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #FFECDA;
      }
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'anz-button': MyElement
  }
}
