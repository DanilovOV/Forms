import InputValidation from "./InputValidation.js"
import { postMessage } from "./requests.js"

export default class FormSender {

    constructor(formElem) {
        this.form = formElem
        this.inputValidationArr = []
        
        this.button = this.form.querySelector('.js-button-validate')
        if (!this.button)
            throw new Error('Form must contain submit button with classname js-button-validate')

        this.addListeners()
        this.addValidation()
    }

    addListeners() {
        this.button.addEventListener('click', this.validateForm.bind(this))
    }

    addValidation() {
        this.form.querySelectorAll('.js-input-validate').forEach(
            formElem => this.inputValidationArr.push(new InputValidation(formElem)))
    }

    validateForm(e) {
        e.preventDefault()

        this.inputValidationArr.forEach(elem => elem.validate(this.form))
        this.inputValidationArr.some(elem => elem.isError)
            || this.request() 
    }

    makeData() {
        const formData = {};
        [...this.form.elements].forEach(elem => {
            if (elem.name != '') formData[elem.name] = elem.value
        })
        return formData
    }

    request() {
        postMessage(this.makeData())
    }
}
