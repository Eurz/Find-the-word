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

    notify(word, letter) {
        this.observers.forEach((observer) => observer.fire(word, letter))
    }
}

export class KeyObserver {
    constructor() {}
    fire(word, letter) {
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

export class SocreObserver {
    constructor() {}
    fire(word, letter) {}
}
