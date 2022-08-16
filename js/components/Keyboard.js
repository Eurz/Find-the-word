import { createWrapper } from '../functions/utils.js'

export default class Keyboard {
    constructor(word, subject) {
        this.keyboardLetters = 'ABCDEFGHIJKLMNOPQRST'.split('')
        this.subject = subject
        this.word = word
        this.keyboardContainer = createWrapper(
            'div',
            'keyboard-container',
            'keyboard'
        )
        this.currentLetter = ''
        // this.render()
    }

    onDisableKey = (e) => {
        const letter = e.target.getAttribute('data-content')
        this.setLetter = letter
    }

    onClickKey = (e) => {
        e.stopPropagation()
        this.onDisableKey(e)
        this.subject.notify(this.word, e.target.getAttribute('data-content'))
        this.onRemoveEvent(e)
    }

    onRemoveEvent = ({ target }) => {
        target.removeEventListener('click', this.onClickKey)
        target.classList.add('disabled')
    }

    render = () => {
        const keyboardWrapper = document.createElement('div')
        keyboardWrapper.classList.add('keyboard')

        this.keyboardLetters.map((letter, index) => {
            const key = createWrapper('div', 'key', `key${letter}`)
            key.textContent = letter
            key.setAttribute('data-content', letter)

            key.addEventListener('click', this.onClickKey)

            keyboardWrapper.appendChild(key)
        })

        this.keyboardContainer.appendChild(keyboardWrapper)
        return this.keyboardContainer
    }

    get getLetter() {
        return this.currentLetter
    }

    set setLetter(letter) {
        this.currentLetter = letter
    }
}
