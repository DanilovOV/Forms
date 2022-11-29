export function postMessage(data) {
    fetch('https://628e4808a339dfef87ab4f4b.mockapi.io/messages', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    })
    .then((response) => {
        alert('success')
        console.log(response)
    })
    .catch((error) => {
        alert('error')
        console.log(error)
    })
}

export function deleteMessage(id) {
    fetch(`https://628e4808a339dfef87ab4f4b.mockapi.io/test/${id}`, {
        method: 'DELETE',
    })
    .then((response) => {
        alert('success')
        console.log(response)
    })
    .catch((error) => {
        alert('error')
        console.log(error)
    })
}

export function changeMessage(id) {
    fetch(`https://628e4808a339dfef87ab4f4b.mockapi.io/test/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(newData)
    })
    .then((response) => {
        alert('success')
        console.log(response)
    })
    .catch((error) => {
        alert('error')
        console.log(error)
    })
}