import { createWrapper } from '../functions/utils.js'
import {
    KeyboardSubject,
    KeyObserver,
    ScoreObserver,
} from '../subjects/KeyboardSubject.js'

export default class Keyboard {
    constructor(params) {
        this.keyboardLetters = 'ABCDEFGHIJKLMNOPQRST'.split('')
        this.word = params.word
        this.scoreDisplayer = params.scoreDisplayer

        this.keyboardSubject = new KeyboardSubject()
        this.keyboardObserver = new KeyObserver()
        this.scoreObserver = new ScoreObserver()

        this.keyboardSubject.subscribe(this.keyboardObserver)
        this.keyboardSubject.subscribe(this.scoreObserver)

        this.keyboardContainer = createWrapper(
            'div',
            'keyboard-container',
            'keyboard'
        )
        this.currentLetter = ''
    }

    onDisableKey = (e) => {
        const letter = e.target.getAttribute('data-content')
        this.setLetter = letter
    }

    onClickKey = (e) => {
        e.stopPropagation()
        this.onDisableKey(e)
        this.keyboardSubject.notify(
            this.word,
            e.target.getAttribute('data-content'),
            this.scoreDisplayer
        )
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
