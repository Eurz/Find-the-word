import { createWrapper } from '../functions/utils.js'

export default class ScoreDisplay {
    constructor() {
        this.container = createWrapper('div', 'score-display', 'score-display')
    }

    render() {
        const content = `
        <div class="score">
        Coups restants
        <div class="score-bar"></div>
        </div>
    `
        this.container.innerHTML = content
        return this.container
    }
}
