import InputValidation from "./InputValidation.js"
import { postMessage } from "./requests.js"

export default class FormSender {
    constructor(form) {
        this.form = form
        this.inputsArr = []
        this.fake = {
            name: 'Oleg',
            email: 'oleg@gmail.com',
            city: 'City',
            message: 'Some text'
        }
        this.#handleFormElements()
    }

    #handleFormElements() {
        [...this.form.elements].forEach(elem => {
            (elem.tagName == 'INPUT' || elem.tagName == 'TEXTAREA')
                && this.#addInputsEvent(elem)

            elem.tagName == 'BUTTON'
                && this.#addButtonListener(elem)
        })
    }

    #addInputsEvent(input) {
        this.inputsArr.push(new InputValidation(input))
    }

    #addButtonListener(button) {
        button.addEventListener('click', this.send.bind(this))
    }

    #makeData() {

    }

    send(e) {
        e.preventDefault()
        postMessage(this.fake)
    }
}