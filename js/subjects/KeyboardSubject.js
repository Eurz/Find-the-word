import ScoreDisplay from '../components/ScoreDisplay.js'

export class KeyboardSubject {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(observer) {
        this.observers = this.observers.filter((obs) => obs !== observer)
    }

    notify(word, letter, scoreDisplayer) {
        this.observers.forEach((observer) =>
            observer.fire(word, letter, scoreDisplayer)
        )
    }
}

export class KeyObserver {
    constructor() {}
    fire(word, letter, scoreDisplayer) {
        const isLetterExist = word.findLetter(letter)

        if (isLetterExist) {
            word.getWord.split('').forEach((l, index) => {
                if (l === letter) {
                    word.updateLetter(letter, index)
                }
            })
        }
    }
}

export class ScoreObserver {
    constructor() {}

    fire = (word, letter, scoreDisplayer) => {
        const isLetterExist = word.findLetter(letter)
        if (!isLetterExist) {
            scoreDisplayer.updateScore()
            // this.strokes--
            // const test = document.querySelector('#life-counter')
            // test.textContent = this.strokes
        }
    }
}
