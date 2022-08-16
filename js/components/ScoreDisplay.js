import { createWrapper } from '../functions/utils.js'

export default class ScoreDisplay {
    constructor(maxScore) {
        this.container = createWrapper('div', 'score-display', 'score-display')
        this.strokesContainer = null
        this.strokes = maxScore
    }

    render() {
        const content = `
        <div class="score">
        <div>Coups restants: <span id="life-counter">${this.strokes}</div>
        <div class="score-bar"></div>
        </div>
    `

        this.container.innerHTML = content
        return this.container
    }

    updateScore = () => {
        this.strokesContainer = document.querySelector('#life-counter')
        this.strokes = this.strokes - 1
        this.strokesContainer.textContent = this.getStrokes

        // this.strokes.textContent =
    }

    get getStrokes() {
        return this.strokes
    }
}
