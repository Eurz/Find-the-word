/**
 *
 * @param {HTMLElement} element - Container to create
 * @param {String} className - Class name of the container
 * @returns HTMLElement
 */
export function createWrapper(element, className, id = null) {
    const wrapper = document.createElement(element)
    wrapper.classList.add(className)
    if (id) {
        wrapper.setAttribute('id', id)
    }

    return wrapper
}
