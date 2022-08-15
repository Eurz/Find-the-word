// import Keyboard from './components/Keyboard.js'
// import Letter from './components/Letter.js'

import Game from './Game.js'

export default class App {
    constructor() {
        this.gameContainer = document.querySelector('#game-container')
    }

    init() {
        // this.addButtonsAction()
        this.newGame()
    }

    addButtonsAction = () => {
        this.gameContainer.innerHTML = `<button class="btn" id="btn-start">Jouer</button>`
        const btnStart = document.querySelector('#btn-start')
        btnStart.addEventListener('click', this.newGame)
    }

    newGame = () => {
        const newGame = new Game(this.gameContainer)
        this.gameContainer.innerHTML = ''
        const renderGame = newGame.render()

        // this.gameContainer.append(renderGame)
    }
}

const app = new App()
app.init()
