import { css} from 'lit'

export default css`
    :host {
        --button-bg-color: #f0f0f0;
    }

    button {
        cursor: pointer;
        background-color: var(--button-bg-color);
        border-radius: 4px;
    }
    
    h1 {
        color: brown;
    }
`