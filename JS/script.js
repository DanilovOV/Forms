import FormSender from "./FormSender.js"
import MessageRequests from "./requests.js"



const messageRequests = new MessageRequests()

document.querySelectorAll('.js-send-form').forEach(
    form => new FormSender(form))



document.querySelector('.js-get-messages').addEventListener('click', writeMessages)

async function writeMessages(e) {
    e && e.preventDefault()

    let messagesArr = await messageRequests.getMessage()
    const dataNode = document.querySelector('.js-data')

    if (!Array.isArray(messagesArr)) return
    dataNode.innerHTML = '';
    messagesArr.forEach(message => addMessage(dataNode, message))
}

function addMessage(node, obj) {
    node.insertAdjacentHTML('beforeend',`\
        <div class="message-card">\
            <div class="message-card__item">\
                <p class="message-card__text">\
                    <span>ID сообщения: </span>\
                    ${obj.id}\
                </p>\
            </div>\
            <div class="message-card__item">\
                <p class="message-card__text">\
                    <span>Имя: </span>\
                    ${obj.name}\
                </p>\
            </div>\
            <div class="message-card__item">\
                <p class="message-card__text">\
                    <span>Почта: </span>\
                    ${obj.email}\
                </p>\
            </div>\
            <div class="message-card__item">\
                <p class="message-card__text">\
                    <span>Город: </span>\
                    ${obj.city || 'не указан'}\
                </p>\
            </div>\
            <div class="message-card__item">\
                <p class="message-card__text">\
                    <span>Сообщение: </span>\
                    ${obj.message || 'не указан'}\
                </p>\
            </div>\
        </div>\
    `
    )
}


document.querySelector('.js-delete-message').addEventListener('click', deleteMessage)

async function deleteMessage(e) {
    e.preventDefault()
    await messageRequests.deleteMessage(document.forms.deleteMessage.messageId.value)
    setTimeout(() => writeMessages(), 200);
}