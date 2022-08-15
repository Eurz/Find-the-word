import Keyboard from './components/Keyboard.js'
import { KeyboardSubject, KeyObserver } from './subjects/KeyboardSubject.js'
import Word from './components/Word.js'

export default class Game {
    constructor(targetContainer) {
        this.root = targetContainer
        this.word = new Word('ANTICONSTI')

        this.keyboardSubject = new KeyboardSubject()
        this.keyboardObserver = new KeyObserver()
        this.keyboardSubject.subscribe(this.keyboardObserver)

        this.keyboard = new Keyboard(this.word, this.keyboardSubject)
    }

    render = () => {
        this.root.append(this.word.render(), this.keyboard.render())
    }
}
