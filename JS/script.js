import FormSender from "./FormSender.js"

document.querySelectorAll('.js-form').forEach(
    form => new FormSender(form))