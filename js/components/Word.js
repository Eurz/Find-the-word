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
        this.letters = []
    }

    render() {
        this.secretWord.forEach((letter, index) => {
            const letterWrapper = new Letter(letter)

            this.letters.push(letter)
            letterWrapper.fadeInLetter(index)

            letterWrapper.addAttribute('data-index', index)

            this.lettersWrapper.appendChild(letterWrapper.render())
        })

        return this.lettersWrapper
    }

    fadeInLetter = (Letter, coefficient) => {
        Letter.classList.add('letter-effect')
        setTimeout(() => {
            Letter.classList.add('show')
        }, 200 * coefficient)
    }

    findLetter(letter) {
        if (this.word.includes(letter)) {
            return true
        }
        return false
    }

    updateLetter(letter, index) {
        const letters = Array.from(
            this.lettersWrapper.querySelectorAll('.letter-item')
        )
        this.secretWord[index] = letter
        const element = letters.find((el) => {
            return el.getAttribute('data-index') == index
        })

        // element.classList.add('letter-animate')
        element.textContent = letter
        Letter.shakeLetter(element)
    }

    isWordRevealed() {
        const isWordRevealed = this.secretWord.every((el) => el !== '_')

        return isWordRevealed
    }

    getMessage() {
        // document.querySelector('#score-display').innerHTML =
        //     '<div class="score-message ">Vous avez trouvé le mot caché</div>'
        // setTimeout(() => {
        //     const div = document.querySelector('.score-message')
        //     div.classList.add('anime')
        // }, 300)
        // return 'Bravo vous avez gagné'
    }

    revealWord() {
        const words = Array.from(
            document.querySelectorAll('#letters-display .letter-item')
        )
        console.log(this.secretWord)

        words.forEach((word, index) => {
            // if (condition) {
            word.textContent = this.word[index]
            Letter.shakeLetter(word)
            this.updateLetter(word.textContent, index)
            // }
        })
    }

    get getWord() {
        return this.word
    }
}
