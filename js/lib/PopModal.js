/**
 * Create a pop up with the div.pop-modal wrapper
 */
export class PopModal {
    constructor(content) {
        this.$modalWrapper = document.querySelector('.pop-modal')
        this.$contentWrapper = document.createElement('div')
        this.$contentWrapper.classList.add('pop-modal-content')
        this._content = content
    }

    closePop() {
        this.$modalWrapper.classList.remove('pop-modal-on')
        const context = this
        setTimeout(() => {
            this.$modalWrapper.innerHTML = ''
            this.$contentWrapper.className = 'pop-modal-content'
        }, 1000)
    }

    addListener() {
        this.$modalWrapper
            .querySelector('.closePop')
            .addEventListener('click', (e) => {
                e.preventDefault()

                this.closePop()
            })
    }

    render() {
        this.$modalWrapper.classList.add('pop-modal-on')

        this.$contentWrapper.innerHTML = this._content
        this.$contentWrapper.innerHTML += `<a href="#" class="closePop">&times;</a>`
        this.$modalWrapper.appendChild(this.$contentWrapper)
        // this.$modalWrapper.innerHTML = content
        this.addListener()
    }
}
/**
 *
 * @param {Object} popModal - Modal to display a project from projectCard
 * @param {Object} projectCard - Project data
 * @returns
 */
export function fullScreenModal(popModal, projectCard) {
    const target = popModal.$contentWrapper

    popModal.setFullScreen = () => {
        setTimeout(() => {
            target.classList.add(`pop-fullscreen`)
            // console.log('Full Screen Modal Applied')
        }, 500)
    }
    popModal.$contentWrapper.id = projectCard._project.title

    if (projectCard._project.isActive) {
        projectCard.$wrapper.addEventListener('click', () => {
            popModal.setFullScreen()
            if (projectCard.app) {
                popModal._content = projectCard
                    .app(popModal.$contentWrapper)
                    .init()
                // console.log('Application called')
            }
        })
    }
    return popModal
}
