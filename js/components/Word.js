import { createWrapper } from '../functions/utils.js'
import Letter from './Letter.js'

export default class Word {
    constructor(word) {
        this.word = word
        this.secretWord = []

        for (let i = 0; i < this.word.length; i++) {
            this.secretWord.push('_')
        }
        const wrapper = createWrapper(
            'div',
            'letters-display',
            'letters-display'
        )
        this.wordWrapper = wrapper
        this.letters = []
    }

    render() {
        for (let i = 0; i < this.word.length; i++) {
            const letterItem = new Letter('-')
            this.letters.push(letterItem)
            // letterItem.fadeInLetter(index)
            letterItem.addAttribute('data-index', i)

            this.wordWrapper.appendChild(letterItem.render())
        }

        return this.wordWrapper
    }

    /**
     *
     * @param {String} letter - Letter to find in the word
     * @returns Boolean
     */
    findLetter(letter) {
        if (this.word.includes(letter)) {
            return true
        }
        return false
    }

    /**
     *
     * @param {String} letter - Letter to display
     * @param {Number} index - Index of letter object item
     */
    updateWord(letter) {
        const wordSplit = this.word.split('')
        let counter = 0

        const letters = wordSplit.forEach((l, index) => {
            if (l === letter) {
                // console.log(index)
                this.letters[index].setLetter = l
                this.letters[index].shakeLetter(counter)

                this.secretWord[index] = letter
                counter++
            }
        })
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
        let counter = 0

        const indexLetter = this.secretWord.forEach((letter, index) => {
            if (letter === '_') {
                this.letters[index].setLetter = this.word.split('')[index]
                this.letters[index].shakeLetter(counter)
                counter++
            }
        })
        console.log(indexLetter)
    }

    get getWord() {
        return this.word
    }
}
