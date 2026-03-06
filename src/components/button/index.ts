import { AnzButton } from './button'

export * from './button'
export type * from './button'

if(!customElements.get('anz-button')) {
    customElements.define('anz-button', AnzButton)
}