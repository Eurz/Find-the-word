import { createWrapper } from '../functions/utils.js'

export default class Keyboard {
    constructor(word, subject) {
        this.keyboardLetters = 'AZERTYUIOPQSDFGHJKLMWXCVBN'.split('')
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

    onDisableKey = (e, letter) => {
        e.target.style.opacity = '50%'
        this.setLetter = letter
    }

    render = () => {
        const keyboardWrapper = document.createElement('div')
        keyboardWrapper.classList.add('keyboard')

        this.keyboardLetters.map((letter) => {
            const key = createWrapper('div', 'key')
            key.textContent = letter

            key.addEventListener('click', (e) => {
                e.stopPropagation()
                this.onDisableKey(e, letter)
                this.subject.notify(this.word, letter)
            })

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
