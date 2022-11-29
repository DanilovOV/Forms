export default class InputValidation {
    static validationArr = []

    constructor(input) {
        this.input = input

        this.addListeners()
    }

    addListeners() {
        this.input.addEventListener('input', this.resetError.bind(this) )
        this.input.addEventListener('blur', this.validate.bind(this) )
    }



    validate() {
        const value = this.input.value;

        (this.input.type == 'text' || this.input.type == 'tel')
            && ( this.emptyValidate(value) || this.addError(this.input) );

        this.input.type == 'email' 
            && ( this.emailValidate(value) || this.addError(this.input) );

        (this.input.type == 'radio' || this.input.type == 'checkbox') 
            && ( this.checkValidate() || this.addError(this.input) );
    }



    addError(elem) {
        elem.classList.add('validate-error', 'js-validate-error')
    }

    resetError() {
        this.input.classList.remove('validate-error', 'js-validate-error')

        if (this.input.type == 'radio' || this.input.type == 'checkbox') {
            document.querySelectorAll(`input[name=${this.input.name}]`).forEach(input =>
                input.closest('.js-input-validate').classList.remove('validate-error', 'js-validate-error'))
        }
    }



    emptyValidate(value) {
        return value ?? false
    }

    emailValidate(value) {
        const emailRegExp = /^\S+@\S+\.\S+$/
        return emailRegExp.test(value)
    }

    checkValidate() {
        return document.querySelector(`input[name=${this.input.name}]:checked`)
    }
}
