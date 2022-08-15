import { createWrapper } from './functions/utils.js'
import Keyboard from './components/Keyboard.js'
import Letter from './components/Letter.js'

export default class Game {
    constructor(targetContainer) {
        this.root = targetContainer
        this.secretWord = 'ANTICONSTI'.split('')
        this.lettersWrapper = createWrapper(
            'div',
            'letters-display',
            'letters-display'
        )

        this.keyboard = new Keyboard()
    }

    render = () => {
        const target = createWrapper('div', 'toto')
        this.secretWord.forEach((letter) => {
            const letterWrapper = new Letter(letter)
            this.lettersWrapper.appendChild(letterWrapper)
        })

        this.root.append(this.lettersWrapper, this.keyboard.render())
        // console.log(this.root)
        // return target
    }
}
