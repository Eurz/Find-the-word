import { createWrapper } from '../functions/utils.js'

export default class Letter {
    constructor(letter) {
        this.letter = letter
        this.setLetterWrapper()
        this.letterWrapper.textContent = this.letter

        // this.render()
    }

    fadeInLetter = (coefficient) => {
        this.letterWrapper.classList.add('letter-effect')
        setTimeout(() => {
            this.letterWrapper.classList.add('show')
        }, 200 * coefficient)
    }

    shakeLetter = (coefficient) => {
        this.letterWrapper.classList.add('letter-animate')
        const divEffect = createWrapper('div', 'letter-shake')
        this.letterWrapper.appendChild(divEffect)

        const animationDelay = 0.2 * coefficient
        divEffect.style.animationDelay = `${animationDelay}s`
        // setTimeout(() => {
        //     divEffect.classList.add('letter-shake-go')
        // }, 4000 * coefficient)
    }

    addAttribute(name, value) {
        this.letterWrapper.setAttribute(name, value)
    }

    get getLetter() {
        return this.letter
    }
    get getContent() {
        return this.letter
    }

    set setLetter(letter) {
        this.letterWrapper.textContent = letter
        this.letter = letter
    }
    setLetterWrapper() {
        if (this.letterWrapper === undefined) {
            this.letterWrapper = createWrapper('div', 'letter-item')
            return
        }

        return this.letterWrapper
    }

    render() {
        return this.letterWrapper
    }
}
