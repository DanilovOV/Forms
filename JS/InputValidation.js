export default class InputValidation {

    constructor(input) {
        this.input = input
        this.isError = false

        this.addListeners()
    }

    addListeners() {
        this.input.addEventListener('input', this.resetError.bind(this) )
        this.input.addEventListener('blur', this.validate.bind(this) )
    }



    validate(form) {
        const value = this.input.value;

        (this.input.type == 'text' || this.input.type == 'tel' || this.input.tagName == "TEXTAREA")
            && ( this.emptyValidate(value) || this.addError(this.input) );

        this.input.type == 'email' 
            && ( this.emailValidate(value) || this.addError(this.input) );

        (this.input.type == 'radio' || this.input.type == 'checkbox') 
            && ( this.checkValidate(form || this.input) || this.addError(this.input) );
    }



    addError(elem) {
        if (this.isError) return

        this.isError = true
        elem.classList.add('validate-error', 'js-validate-error')
    }

    resetError() {
        if (!this.isError) return

        this.isError = false
        this.input.classList.remove('validate-error', 'js-validate-error');

        (this.input.type == 'radio' || this.input.type == 'checkbox')
            && document.querySelectorAll(`input[name=${this.input.name}]`).forEach(input =>
                input.closest('.js-input-validate').classList.remove('validate-error', 'js-validate-error'))
    }



    emptyValidate(value) {
        return value ?? false
    }

    emailValidate(value) {
        const emailRegExp = /^\S+@\S+\.\S+$/
        return emailRegExp.test(value)
    }

    checkValidate(wrapper) {
        if (!wrapper) throw new Error('No wrapper arg')
        return [...wrapper.querySelectorAll(`input[name=${this.input.name}]`)].some(input => input.checked)
    }
}
