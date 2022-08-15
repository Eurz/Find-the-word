import { createWrapper } from '../functions/utils.js'

export default class Letter {
    constructor(letter) {
        this.letter = letter

        const letterWrapper = createWrapper('div', 'letter-item')
        letterWrapper.textContent = this.letter
        return letterWrapper
    }

    getLetter = () => {
        return this.letter
    }
}
