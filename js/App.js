// import Keyboard from './components/Keyboard.js'
// import Letter from './components/Letter.js'

import Game from './Game.js'

export default class App {
    constructor() {
        this.gameContainer = document.querySelector('#game-container')
        this.homeContainer = document.querySelector('.main')
    }

    init() {
        // this.addButtonsAction()
        this.startGame()
    }

    addButtonsAction = () => {
        this.homeContainer.innerHTML = `<button class="btn" id="btn-start">Jouer</button>`
        const btnStart = document.querySelector('#btn-start')
        btnStart.addEventListener('click', this.startGame)
    }

    startGame = () => {
        const newGame = new Game(this.gameContainer)
        this.gameContainer.innerHTML = ''
        const renderGame = newGame.render()
    }
}

const app = new App()
app.init()
