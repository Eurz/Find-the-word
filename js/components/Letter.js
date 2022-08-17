import { createWrapper } from '../functions/utils.js'

export default class Letter {
    constructor(letter) {
        this.letter = letter
        const letterDiv = createWrapper('div', 'letter-item')
        this.letterWrapper = letterDiv
        this.letterWrapper.textContent = this.letter

        this.finalLetter = this.letterWrapper

        this.render()
    }

    fadeInLetter = (coefficient) => {
        this.letterWrapper.classList.add('letter-effect')
        setTimeout(() => {
            this.letterWrapper.classList.add('show')
        }, 200 * coefficient)
    }

    static shakeLetter = (el) => {
        const divEffect = createWrapper('div', 'letter-shake')
        el.appendChild(divEffect)

        setTimeout(() => {
            divEffect.classList.add('letter-shake-go')
        }, 200)
    }

    addAttribute(name, value) {
        this.letterWrapper.setAttribute(name, value)
    }
    getLetter = () => {
        return this.letter
    }

    render() {
        return this.letterWrapper
    }
}
