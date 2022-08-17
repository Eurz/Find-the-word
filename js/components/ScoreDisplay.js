import { createWrapper } from '../functions/utils.js'

export default class ScoreDisplay {
    /**
     *
     * @param {*} maxScore - Initialize a game with a maximum score to "maxscore"
     */
    constructor(maxScore) {
        this.container = createWrapper('div', 'score-display', 'score-display')
        this.strokesContainer = null
        this.maxScore = maxScore
        this.strokes = this.maxScore
    }

    render() {
        const content = `
        <div class="score">
        <div>Coups restants: <span id="life-counter">${this.strokes}</div>
        <div class="score-bar"><div class="inside-bar"></div></div>
        </div>
    `

        this.container.innerHTML = content
        return this.container
    }

    updateScore = () => {
        this.strokesContainer = document.querySelector('#life-counter')
        this.strokes--
        this.strokesContainer.textContent = this.getStrokes
        const bar = document.querySelector('.inside-bar')
        const barWidth = (100 / this.maxScore) * (this.maxScore - this.strokes)
        bar.style.width = `${barWidth}%`
    }

    /**
     *
     * @returns False if strokes = 0
     */
    gameOver() {
        if (this.strokes === 0) {
            console.log('Partie terminée')
            this.container.innerHTML =
                '<div class="score-message ">Vous avez perdu!!! \n Le mot caché était:</div>'

            setTimeout(() => {
                const div = document.querySelector('.score-message')
                div.classList.add('anime')
            }, 300)
            return true
        }

        return false
    }

    getMessage() {
        return 'Désolé vous avez perdu'
    }

    get getStrokes() {
        return this.strokes
    }
}
