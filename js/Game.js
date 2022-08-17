import Keyboard from './components/Keyboard.js'

import Word from './components/Word.js'
import ScoreDisplay from './components/ScoreDisplay.js'

export default class Game {
    constructor(targetContainer) {
        this.root = targetContainer
        this.word = new Word('POURTOUR')
        this.maxScore = 3
        this.scoreDisplay = new ScoreDisplay(this.maxScore)

        this.paramsKeyboard = {
            word: this.word,
            scoreDisplayer: this.scoreDisplay,
        }
        this.keyboard = new Keyboard(this.paramsKeyboard)
    }

    render = () => {
        this.root.append(
            this.scoreDisplay.render(),
            this.word.render(),
            this.keyboard.render()
        )
    }
}
