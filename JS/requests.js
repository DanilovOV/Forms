export default class MessageRequests {
    url = 'https://628e4808a339dfef87ab4f4b.mockapi.io/messages/'

    async getMessage() {
        let response = await fetch(this.url)

        return response.ok
            ? await response.json()
            : "Error"
    }

    postMessage(data) {
        fetch(this.url, {
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

    async deleteMessage(id) {
        fetch(this.url + id, {
            method: 'DELETE',
        })
    }

    changeMessage(id, newData) {
        fetch(this.url + id, {
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
}
