import { createWrapper } from '../functions/utils.js'
import Letter from './Letter.js'

export default class Word {
    constructor(word) {
        this.word = word
        this.secretWord = []
        for (let i = 0; i < this.word.length; i++) {
            this.secretWord.push('_')
        }
        this.lettersWrapper = createWrapper(
            'div',
            'letters-display',
            'letters-display'
        )
        this.findLetter('I')
    }

    render() {
        this.secretWord.forEach((letter, index) => {
            const letterWrapper = new Letter(letter)
            letterWrapper.setAttribute('data-index', index)
            this.lettersWrapper.appendChild(letterWrapper)
        })

        return this.lettersWrapper
    }

    findLetter(letter) {
        if (this.word.includes(letter)) {
            return true
        }
        return false
        // this.word.split('').forEach((l, index) => {})
    }

    updateLetter(letter, index) {
        const letters = Array.from(
            this.lettersWrapper.querySelectorAll('.letter-item')
        )

        const element = letters.find((el) => {
            return el.getAttribute('data-index') == index
        })

        element.textContent = letter
    }
    get getWord() {
        return this.word
    }
}
