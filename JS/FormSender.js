import InputValidation from "./InputValidation.js"

export default class FormSender {
    constructor(form) {
        this.form = form
        this.inputsArr = []
        this.#handleFormElements()
    }

    #handleFormElements() {
        [...this.form.elements].forEach(elem => {
            (elem.tagName == 'INPUT' || elem.tagName == 'TEXTAREA')
                && this.#addInputsEvent(elem);

            elem.tagName == 'BUTTON'
                && this.#addButtonListener(elem)
        })
    }

    #addInputsEvent(input) {
        this.inputsArr = new InputValidation(input)
    }

    #addButtonListener(button) {
        button.addEventListener('click', this.send.bind(this))
    }

    send(e) {
        e.preventDefault()
        console.log(e)
    }
}